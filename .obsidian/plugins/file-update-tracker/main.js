const { Plugin, PluginSettingTab, Setting, Notice, moment } = require("obsidian");

const DEFAULT_SETTINGS = {
    enabled: true,
    excludedFolders: []
};

class FileUpdateTrackerSettingTab extends PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        const { containerEl } = this;

        containerEl.empty();

        containerEl.createEl("h2", {
            text: "File Update Tracker"
        });

        // Enable tracking
        new Setting(containerEl)
            .setName("Enable tracking")
            .setDesc(
                "Automatically record one update timestamp per Markdown file per day."
            )
            .addToggle(toggle =>
                toggle
                    .setValue(this.plugin.settings.enabled)
                    .onChange(async value => {
                        this.plugin.settings.enabled = value;
                        await this.plugin.saveSettings();
                    })
            );

        // Excluded folders heading
        containerEl.createEl("h3", {
            text: "Excluded folders"
        });

        containerEl.createEl("p", {
                text: "Markdown files inside these folders will not be tracked."
        });

        containerEl.createEl("p", {
            text: "Enter paths relative to the Obsidian vault root."
        });

        // Container for existing excluded folders
        const folderContainer = containerEl.createDiv();

        const renderFolders = () => {
            folderContainer.empty();

            if (this.plugin.settings.excludedFolders.length === 0) {
                folderContainer.createEl("p", {
                    text: "No excluded folders."
                });

                return;
            }

            this.plugin.settings.excludedFolders.forEach((folder, index) => {
                new Setting(folderContainer)
                    .setName(folder)
                    .addButton(button =>
                        button
                            .setButtonText("Remove")
                            .setWarning()
                            .onClick(async () => {
                                this.plugin.settings.excludedFolders.splice(
                                    index,
                                    1
                                );

                                await this.plugin.saveSettings();

                                renderFolders();

                                new Notice(
                                    `Excluded folder removed: ${folder}`
                                );
                            })
                    );
            });
        };

        renderFolders();

        // Add excluded folder
        let folderInput;

        new Setting(containerEl)
            .setName("Add excluded folder")
            .setDesc(
                "Use a path relative to your Obsidian vault, not the Windows file-system path. \nFor example: 99 System/99.02 Templates"
            )
            .addText(text => {
                folderInput = text;

                text.setPlaceholder(
                    "99 System/99.02 Templates"
                );
            })
            .addButton(button =>
                button
                    .setButtonText("Add")
                    .setCta()
                    .onClick(async () => {

                        const folder = folderInput
                            .getValue()
                            .trim();

                        if (!folder) {
                            new Notice("Enter a folder path.");
                            return;
                        }

                        const normalized = folder
                            .replace(/\\/g, "/")
                            .replace(/^\/+|\/+$/g, "");

                        if (!normalized) {
                            new Notice("Enter a valid folder path.");
                            return;
                        }

                        if (
                            this.plugin.settings.excludedFolders.includes(
                                normalized
                            )
                        ) {
                            new Notice(
                                "That folder is already excluded."
                            );

                            return;
                        }

                        this.plugin.settings.excludedFolders.push(
                            normalized
                        );

                        await this.plugin.saveSettings();

                        folderInput.setValue("");

                        renderFolders();

                        new Notice(
                            `Excluded folder added: ${normalized}`
                        );
                    })
            );

        // Tracking rules
        containerEl.createEl("h3", {
            text: "Tracking rules"
        });

        new Setting(containerEl)
            .setName("Markdown files only")
            .setDesc("Only .md files are tracked.")
            .addToggle(toggle =>
                toggle
                    .setValue(true)
                    .setDisabled(true)
            );

        new Setting(containerEl)
            .setName("One timestamp per day")
            .setDesc(
                "A file receives a maximum of one updated timestamp for each calendar day."
            )
            .addToggle(toggle =>
                toggle
                    .setValue(true)
                    .setDisabled(true)
            );

        new Setting(containerEl)
            .setName("Frontmatter required")
            .setDesc(
                "Files without YAML frontmatter are ignored."
            )
            .addToggle(toggle =>
                toggle
                    .setValue(true)
                    .setDisabled(true)
            );
    }
}

module.exports = class FileUpdateTracker extends Plugin {

    async onload() {
        await this.loadSettings();

        this.processing = new Set();

        this.registerEvent(
            this.app.vault.on("modify", async file => {
                await this.handleModify(file);
            })
        );

        this.addSettingTab(
            new FileUpdateTrackerSettingTab(
                this.app,
                this
            )
        );

        console.log(
            "File Update Tracker loaded"
        );
    }

    async loadSettings() {
        const savedSettings = await this.loadData();

        this.settings = Object.assign(
            {},
            DEFAULT_SETTINGS,
            savedSettings || {}
        );

        if (!Array.isArray(this.settings.excludedFolders)) {
            this.settings.excludedFolders = [];
        }
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    isExcluded(file) {
        const path = file.path
            .replace(/\\/g, "/")
            .replace(/^\/+|\/+$/g, "");

        return this.settings.excludedFolders.some(folder => {
            const normalizedFolder = folder
                .replace(/\\/g, "/")
                .replace(/^\/+|\/+$/g, "");

            return (
                path === normalizedFolder ||
                path.startsWith(normalizedFolder + "/")
            );
        });
    }

    async handleModify(file) {

        if (!this.settings.enabled) {
            return;
        }

        // Markdown only
        if (file.extension !== "md") {
            return;
        }

        // Ignore excluded folders
        if (this.isExcluded(file)) {
            return;
        }

        // Prevent duplicate processing
        if (this.processing.has(file.path)) {
            return;
        }

        await this.recordUpdate(file);
    }

    async recordUpdate(file) {

        this.processing.add(file.path);

        try {

            const today = moment().format(
                "YYYY-MM-DD"
            );

            const timestamp = moment().format(
                "YYYY-MM-DD HH:mm"
            );

            await this.app.fileManager.processFrontMatter(
                file,
                frontmatter => {

                    // Ignore files without frontmatter
                    if (!frontmatter) {
                        return;
                    }

                    // Create updated array
                    if (!frontmatter.updated) {
                        frontmatter.updated = [];
                    }

                    // Convert old single value to array
                    if (!Array.isArray(frontmatter.updated)) {
                        frontmatter.updated = [
                            frontmatter.updated
                        ];
                    }

                    // Check whether today's date already exists
                    const alreadyUpdatedToday =
                        frontmatter.updated.some(
                            entry =>
                                String(entry).startsWith(today)
                        );

                    // One timestamp per day
                    if (!alreadyUpdatedToday) {
                        frontmatter.updated.push(timestamp);
                    }
                }
            );

        } catch (error) {

            console.error(
                "File Update Tracker error:",
                error
            );

        } finally {

            setTimeout(() => {
                this.processing.delete(file.path);
            }, 500);
        }
    }
};
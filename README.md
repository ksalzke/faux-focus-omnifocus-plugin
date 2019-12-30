



# About

This is an Omni Automation plug-in bundle for OmniFocus that mimics the built-in 'Focus' mode that is available on Mac. Further details are provided below.

This plugin was inspired by Ryan Murphy and his Applescript shared [here](https://discourse.omnigroup.com/t/enabling-focus-on-ios-through-scripting-and-tags-and-seeking-suggestions-for-faster-execution/47302).

_Please note that Omni Automation for OmniFocus is still in development and details are subject to change before it officially ships. If you have questions, please refer to [Omni's Slack #automation channel](https://www.omnigroup.com/slack/)._

_In addition, please note that all scripts on my GitHub account (or shared elsewhere) are works in progress. If you encounter any issues or have any suggestions please let me know--and do please make sure you backup your database before running scripts from a random amateur on the internet!)_

## Known issues 

### Issue running report on macOS

Note that this currently does not run on macOS (or iOS versions earlier than v3.4+) as it makes use of the `flattenedProjects` variable which is not yet available there.

# Installation & Set-Up

(For instructions on getting started with Omni Automation, see [here](https://kaitlinsalzke.com/how-to/how-to-add-a-omnijs-plug-in-to-omnifocus-and-assign-a-keyboard-shortcut/).)

1. Click on the green `Clone or download` button above to download a `.zip` file of all the files in this GitHub repository.
2. Unzip the downloaded file.
3. Open the file located at `Resources/focusConfig.js` and make any changes to the configuration needed to reflect your OmniFocus set-up. Further explanations of the options are included within that file as comments.
4. Rename the entire folder to anything you like, with the extension `.omnifocusjs`
5. Move the resulting file to your OmniFocus plug-in library folder.

# Actions

## Faux Focus

This action can be run on one or more selected projects and/or folders. It:
1. Checks if there is already a 'focused' project and if so begins by running the 'Faux Unfocus' action.
2. For each active project that is not selected or inside a selected folder, applies an `Unfocused` tag (which can be configured in the configuration file) and marks the project as on hold.
3. When finished, an alert is shown to confirm that the script is completed.

## Faux Unfocus

This action can be run when the 'unfocused' tag is applied to one or more projects. It:
1. Makes each project that is tagged with `Unfocused` active.
2. Deletes the `Unfocused` tag.
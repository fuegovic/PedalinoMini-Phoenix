# Installation

## Recommended Method: Web Installer

The simplest way to install PedalinoMini firmware is using the Web Installer:

### Using the Web Installer (Recommended)

1. **Connect your device** to your computer via USB
   
2. **Launch the Web Installer**
   - Click here: [PedalinoMini Web Installer](../installer.md)
   - Works with Chrome, Edge, or other Chromium-based browsers that support WebUSB
   
3. **Follow the on-screen instructions**
   - Select your device from the connection dialog
   - Choose the firmware version you want to install
   - Wait for the installation to complete

> **Note:** The Web Installer automatically handles both the firmware and filesystem installation in one step, making it ideal for most users.

## How to Build and Upload PedalinoMini

### Prerequisites

1. **Install [Visual Studio Code](https://code.visualstudio.com/)**

2. **Install [PlatformIO Extension for VSCode](https://platformio.org/install/ide?install=vscode)**
   - Open VSCode
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "PlatformIO" and install it
   - Restart VSCode when prompted

3. **Install Git**
   - **Windows**: Download and install from [git-scm.com/download/win](https://git-scm.com/download/win)
   - **macOS**: Run `xcode-select --install` in Terminal
   - **Linux**: Use your package manager (e.g., `sudo apt install git`)

### Getting the Code

**Option 1: Command Line (Recommended)**
```bash
git clone https://github.com/fuegovic/PedalinoMini
cd PedalinoMini
code .
```

### Building and Uploading

1. **Open the PlatformIO sidebar**
- Click the PlatformIO icon in the left sidebar (looks like an ant)

2. **Select your environment**
- Expand "PROJECT TASKS"
- Find your board (e.g., `env:esp32doit-devkit-v1`)

3. **Build the firmware**
- Under your selected environment, expand "General"
- Click "Build"
- Wait for the build to complete

  **Alternative methods if you can't find this option:**
  - In the PlatformIO menu at the bottom of VSCode, click "PlatformIO: Build"

4. **Upload the firmware**
- Under "General", click "Upload"
- Wait for the upload to complete

  **Alternative methods if you can't find this option:**
   - In the PlatformIO menu at the bottom of VSCode, click "PlatformIO: Upload"

5. **Upload the File System Image** (crucial for WebUI functionality)
- Under your selected environment, expand "Platform"
- Click "Upload File System Image"

  **Alternative methods if you can't find this option:**
   - In the PlatformIO menu at the bottom of VSCode, click "PlatformIO: Upload File System Image"
   - Or use the command line in the project directory:
     ```bash
     pio run -t uploadfs
     ```

#### Troubleshooting

- If you can't find the "Upload File System Image" option, make sure your selected environment supports it
- If using the command line for uploadfs, ensure you've installed the PlatformIO CLI tool
- Check the PlatformIO documentation for your specific board if you encounter issues

#### Important Note

> Don't skip the "Upload File System Image" step, as the WebUI will not function properly without it.

> Before any update save configuration, reset to factory default and reload configuration. EEPROM can change without any further advice.
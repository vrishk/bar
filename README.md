# Bar

A simple menubar created using Übersicht. Inspired by [zenbar](https://github.com/paulrouget/zenbar)

![Screenshot of Bar](screenshot.jpg)

Consists of the following features:

- Currently active app (`focus.jsx`)
- Date and time (`time.jsx`)
- CPU Temperature (`cpu.jsx`)
- Battery charge and status (`battery.jsx`)

## Installation

Make sure you have [Übersicht](http://tracesof.net/uebersicht/) installed.

The CPU Temperature widget makes use of [osx-cpu-temp](https://github.com/lavoiesl/osx-cpu-temp). Follow the instructions to clone and create the binary `osx-cpu-temp`. In `cpu.jsx`, replace the line:

```javascript
export const command = "~/Software/cli/osx-cpu-temp/osx-cpu-temp";
```

with:

```javascript
export const command = "your/path/to/osx-cpu-temp/osx-cpu-temp";
```

Run the following command:

```bash
git clone https://github.com/vrishk/bar $HOME/Library/Application\ Support/Übersicht/widgets/bar
```


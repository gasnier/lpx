# lpx Local Package eXecute

Execute a command found in local node_modules/.bin folder or from a parent folder.

You can use lpx to
* run a binary found the local node_modules/.bin folder
* run a binary found in the node_modules/.bin of a workspace root from anywhere in the workspace

lpx does not download any package if the binary is not found locally (ie not like npx)

## Install

This package must be installed globally
```
npm install -g lpx
```
## Usage

With this folder structure :
```
folder1
|- node_modules
|- |- .bin
|- |- |- command1
|- other files in folder1
|- folder2
|- |- node_modules
|- |- |- .bin
|- |- |- |- command2
|- |- folder3

```

You can execute both command1 and command2 from folder3

```
cd folder1/folder2/folder3
lpx command1 command1arguments
lpx command2 command2arguments
```

## Motivation
At [Cervval](https://www.cervval.com), our packages are organised in a workspace that has a package.json that determines the versions of the build tools we use (tsc, webpack...)

I wanted to be able to use the binaries of these packages from the command line from anywhere in the workspace.

Solutions I tried before :
* Add scripts in each local package.json

Let's say you have scripts : { "tsc" : "tsc" } in your package.json

When doing this, you can run ``npm run tsc`` to use local tsc bin

If you want to add a parameter you need to run  ``npm run tsc -- -b`` with ``--`` which I find very unpleasant

Also, you have to put the binaries in all pacckages scripts which is not optimal

* npx

By using npx, if you are in a workspace sub folder it will download the package from npm registry and not use the locally defined one

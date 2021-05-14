# lpx Local Package eXecute

Execute a command found in local node_modules .bin folder.

If the command is not found in node_module/.bin of the current folder, lpx searches on parent folder.

## install

This package must be installed globally
```
npm install -g lpx
```
## usage

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

{ pkgs }: {
  deps = [
    pkgs.nodejs-16_x
    pkgs.nodejs-16_x
    pkgs.clear
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}
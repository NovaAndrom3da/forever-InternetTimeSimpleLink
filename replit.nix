{ pkgs }: with pkgs; {
  deps = [
    python39Full
    python39Packages.pip
  ];
}
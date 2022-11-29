USE 'bdprojetweb';
INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`) VALUES ('1', 'circuit1', NULL, 'description du circuit1', 'A');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('1', '1', 'etape1 de c1', NULL, 'description de letape 1 du circuit 1', '2022-11-08 14:27:37', '2022-11-16 14:27:37', 'un lieu de rencontre ');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('1', '1', '2022-11-16 14:30:01', 'une journee bien ensoleillee');
INSERT INTO `activites` (`ida`, `idj`, `nom`, `tempsDebut`, `tempsFin`, `descriptiona`) VALUES ('1', '1', 'jouer au golf', '2022-11-16 14:30:41', '2022-11-16 14:30:42', 'une belle partie de 8trous');

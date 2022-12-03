INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`) VALUES ('1', 'circuit1', 'Sydney.jpg', 'description du circuit1', 'A');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('1', '1', 'etape1 de c1', NULL, 'description de letape 1 du circuit 1', '2022-11-08 14:27:37', '2022-11-16 14:27:37', 'un lieu de rencontre ');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('1', '1', '2022-11-16 14:30:01', 'une journee bien ensoleillee');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('1', '1', 'jouer au golf', '2022-11-16 14:30:41', '2022-11-16 14:30:42', 'une belle partie de 8trous');

INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`) VALUES ('2', 'Portugal', 'Porto.jpg', 'Voyage au Portugal', 'A');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('2', '2', 'Porto', NULL, 'Première étape du voyage au Portugal', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee Porto');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('2', '2', '2022-12-25 12:00:00', 'Noel');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('2', '2', 'Restaurant Portugal', '2022-12-25 19:30:00', '2022-12-25 20:30:00', 'Degustation locale');

INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`) VALUES ('3', 'Australie', 'Sydney.jpg', 'Voyage en Australie', 'A');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('3', '3', 'Sydney', NULL, 'Première étape du voyage en Australie', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee a Sydney');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('3', '3', '2022-12-25 12:00:00', 'Noel');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('3', '3', 'Restaurant Australien', '2022-12-25 19:30:00', '2022-12-25 20:30:00', 'Degustation locale');

INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`) VALUES ('4', 'Japon', 'Tokyo.jpg', 'Voyage au Japon', 'A');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('4', '4', 'Tokyo', NULL, 'Première étape du voyage au Japon', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee a tokyo');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('4', '4', '2022-12-25 12:00:00', 'Noel');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('4', '4', 'Restaurant Japon', '2022-12-25 19:30:00', '2022-12-25 20:30:00', 'Degustation locale');

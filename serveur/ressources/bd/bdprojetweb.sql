
CREATE DATABASE IF NOT EXISTS `bdprojetweb` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `bdprojetweb`;

CREATE TABLE membres (
  idm INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  prenom VARCHAR(255) NOT NULL,
  nom VARCHAR(255) NOT NULL,
  courriel VARCHAR(255) NOT NULL,
  sexe varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  daten date DEFAULT NULL,
  photom VARCHAR(255)DEFAULT NULL
);

CREATE TABLE connexion (
  idm INTEGER PRIMARY KEY NOT NULL,
  courriel VARCHAR(255) NOT NULL,
  pass VARCHAR(12) NOT NULL,
  etat VARCHAR(2),
  role VARCHAR(2),
  FOREIGN KEY (idm) REFERENCES membres (idm) ON DELETE CASCADE
);

CREATE TABLE membrescircuits (
  idm INTEGER NOT NULL,
  idc INTEGER NOT NULL
);

CREATE TABLE circuits (
  idc INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nomc VARCHAR(255),
  photoc VARCHAR(255)DEFAULT NULL,
  descriptionc VARCHAR(255) NOT NULL,
  etat VARCHAR(4) NOT NULL,
  prix INTEGER DEFAULT NULL
);

CREATE TABLE etapes (
  ide INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  idc INTEGER NOT NULL,
  nome VARCHAR(255) NOT NULL,
  photoe VARCHAR(255)DEFAULT NULL,
  descriptione VARCHAR(255) NOT NULL,
  debut datetime NOT NULL,
  fin datetime NOT NULL,
  lieurencontre VARCHAR(255) NOT NULL,
  FOREIGN KEY (idc) REFERENCES circuits (idc) ON DELETE CASCADE
);


CREATE TABLE journees (
  idj INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  ide INTEGER NOT NULL,
  datej datetime NOT NULL,
  descriptionj VARCHAR(255) NOT NULL,
  FOREIGN KEY (ide) REFERENCES etapes (ide) ON DELETE CASCADE
  
);

CREATE TABLE activites (
  ida INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  idj INTEGER NOT NULL,
  noma VARCHAR(255) NOT NULL,
  tempsdebut datetime NOT NULL,
  tempsfin datetime NOT NULL,
  descriptiona VARCHAR(255) NOT NULL,
  FOREIGN KEY (idj) REFERENCES journees (idj) ON DELETE CASCADE
);

ALTER TABLE membrescircuits ADD FOREIGN KEY (idm) REFERENCES membres (idm);

ALTER TABLE membrescircuits ADD FOREIGN KEY (idc) REFERENCES circuits (idc);


INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`) VALUES ('1', 'circuit1', NULL, 'description du circuit1', 'A');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('1', '1', 'etape1 de c1', NULL, 'description de letape 1 du circuit 1', '2022-11-08 14:27:37', '2022-11-16 14:27:37', 'un lieu de rencontre ');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('1', '1', '2022-11-16 14:30:01', 'une journee bien ensoleillee');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('1', '1', 'jouer au golf', '2022-11-16 14:30:41', '2022-11-16 14:30:42', 'une belle partie de 8trous');

INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`) VALUES ('2', 'Portugal', NULL, 'Voyage au Portugal', 'A');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('2', '2', 'Porto', NULL, 'Première étape du voyage au Portugal', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee Porto');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('2', '2', '2022-12-25 12:00:00', 'Noel');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('2', '2', 'Restaurant Portugal', '2022-12-25 19:30:00', '2022-12-25 20:30:00', 'Degustation locale');

INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`) VALUES ('3', 'Australie', NULL, 'Voyage en Australie', 'A');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('3', '3', 'Sydney', NULL, 'Première étape du voyage en Australie', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee a Sydney');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('3', '3', '2022-12-25 12:00:00', 'Noel');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('3', '3', 'Restaurant Australien', '2022-12-25 19:30:00', '2022-12-25 20:30:00', 'Degustation locale');

INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`) VALUES ('4', 'Japon', NULL, 'Voyage au Japon', 'A');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('4', '4', 'Tokyo', NULL, 'Première étape du voyage au Japon', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee a tokyo');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('4', '4', '2022-12-25 12:00:00', 'Noel');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('4', '4', 'Restaurant Japon', '2022-12-25 19:30:00', '2022-12-25 20:30:00', 'Degustation locale');

INSERT INTO `membres` (`idm`, `prenom`, `nom`, `courriel`, `sexe`, `daten`, `photom`) VALUES
(2, 'Admin', 'Admin', 'admin@tlt.com', 'A', '0001-01-01', 'avatar.png');
INSERT INTO `connexion` (`idm`, `courriel`, `pass`, `etat`, `role`) VALUES
(2, 'admin@tlt.com', 'Admin@1234', 'A', 'A');

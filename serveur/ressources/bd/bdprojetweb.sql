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
  prix INTEGER DEFAULT(0)
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
  tempsdebut VARCHAR(10) NOT NULL,
  tempsfin VARCHAR(10) NOT NULL,
  descriptiona VARCHAR(255) NOT NULL,
  FOREIGN KEY (idj) REFERENCES journees (idj) ON DELETE CASCADE
);

ALTER TABLE membrescircuits ADD FOREIGN KEY (idm) REFERENCES membres (idm);

ALTER TABLE membrescircuits ADD FOREIGN KEY (idc) REFERENCES circuits (idc);


INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`, `prix`) VALUES ('1', 'Corée', 'Pyongyang.jpg', 'Voyage en Corée', 'A', '10000');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('1', '1', 'Pyongyang', NULL, 'Première étape du voyage en Corée', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee Pyongyang');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('1', '1', '2022-11-16 14:30:01', 'une journee belle journée pour la prison');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('1', '1', 'Se faire arreter', '14:30:41', '14:30:42', 'un beau séjour au trou');

INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`, `prix`) VALUES ('2', 'Portugal', 'Porto.jpg', 'Voyage au Portugal', 'A', '12000');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('2', '2', 'Porto', NULL, 'Première étape du voyage au Portugal', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee Porto');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('2', '2', '2022-12-25 12:00:00', 'Noel');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('2', '2', 'Restaurant Portugal', '19:30:00', '20:30:00', 'Degustation locale');

INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`, `prix`) VALUES ('3', 'Australie', 'Sydney.jpg', 'Voyage en Australie', 'A', '15000');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('3', '3', 'Sydney', NULL, 'Première étape du voyage en Australie', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee a Sydney');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('3', '3', '2022-12-25 12:00:00', 'Noel');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('3', '3', 'Restaurant Australien', '19:30:00', '20:30:00', 'Degustation locale');

INSERT INTO `circuits` (`idc`, `nomc`, `photoc`, `descriptionc`, `etat`, `prix`) VALUES ('4', 'Japon', 'Tokyo.jpg', 'Voyage au Japon', 'A', '13000');
INSERT INTO `etapes` (`ide`, `idc`, `nome`, `photoe`, `descriptione`, `debut`, `fin`, `lieurencontre`) VALUES ('4', '4', 'Tokyo', NULL, 'Première étape du voyage au Japon', '2022-12-25 18:00:00', '2022-12-25 20:00:00', 'Premiere journee a tokyo');
INSERT INTO `journees` (`idj`, `ide`, `datej`, `descriptionj`) VALUES ('4', '4', '2022-12-25 12:00:00', 'Noel');
INSERT INTO `activites` (`ida`, `idj`, `noma`, `tempsdebut`, `tempsfin`, `descriptiona`) VALUES ('4', '4', 'Restaurant Japon', '19:30:00', '20:30:00', 'Degustation locale');

INSERT INTO `membres` (`idm`, `prenom`, `nom`, `courriel`, `sexe`, `daten`, `photom`) VALUES
(2, 'Admin', 'Admin', 'admin@tlt.com', 'A', '0001-01-01', 'avatar.png');
INSERT INTO `connexion` (`idm`, `courriel`, `pass`, `etat`, `role`) VALUES
(2, 'admin@tlt.com', 'Admin@1234', 'A', 'A');

INSERT INTO `membres` (`idm`, `prenom`, `nom`, `courriel`, `sexe`, `daten`, `photom`) VALUES
(3, 'Membre', 'Membre', 'membre@tlt.com', 'A', '0001-01-01', 'avatar.png');
INSERT INTO `connexion` (`idm`, `courriel`, `pass`, `etat`, `role`) VALUES
(3, 'Membre@tlt.com', 'Membre@123', 'A', 'M');
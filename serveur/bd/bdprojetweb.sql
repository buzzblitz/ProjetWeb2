
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
  role VARCHAR(2)
);

CREATE TABLE membresCircuits (
  idm INTEGER NOT NULL,
  idc INTEGER NOT NULL
);

CREATE TABLE circuits (
  idc INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nomc VARCHAR(255),
  photoc VARCHAR(255)DEFAULT NULL,
  descriptionc VARCHAR(255) NOT NULL,
  etat VARCHAR(4) NOT NULL
);

CREATE TABLE etapes (
  ide INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  idc INTEGER NOT NULL,
  nome VARCHAR(255) NOT NULL,
  photoe VARCHAR(255)DEFAULT NULL,
  descriptione VARCHAR(255) NOT NULL,
  debut datetime NOT NULL,
  fin datetime NOT NULL,
  lieurencontre VARCHAR(255) NOT NULL
);


CREATE TABLE journees (
  idj INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  ide INTEGER NOT NULL,
  datej datetime NOT NULL,
  descriptionj VARCHAR(255) NOT NULL
  
);

CREATE TABLE etapesActivites (
  ide INTEGER NOT NULL,
  ida INTEGER NOT NULL
);

CREATE TABLE activites (
  ida INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  idj INTEGER NOT NULL,
  nom VARCHAR(255) NOT NULL,
  tempsDebut datetime NOT NULL,
  tempsFin datetime NOT NULL,
  descriptiona VARCHAR(255) NOT NULL
  
);

CREATE TABLE circuitsEtapes (
  ide INTEGER NOT NULL,
  idc INTEGER NOT NULL
);

ALTER TABLE etapesActivites ADD FOREIGN KEY (ida) REFERENCES activites (ida);

ALTER TABLE etapesActivites ADD FOREIGN KEY (ide) REFERENCES etapes (ide);

ALTER TABLE circuitsEtapes ADD FOREIGN KEY (ide) REFERENCES etapes (ide);

ALTER TABLE circuitsEtapes ADD FOREIGN KEY (idc) REFERENCES circuits (idc);

ALTER TABLE membresCircuits ADD FOREIGN KEY (idm) REFERENCES membres (idm);

ALTER TABLE membresCircuits ADD FOREIGN KEY (idc) REFERENCES circuits (idc);

ALTER TABLE connexion ADD FOREIGN KEY (idm) REFERENCES membres (idm);

ALTER TABLE etapes ADD FOREIGN KEY (idc) REFERENCES circuits (idc);
ALTER TABLE journees ADD FOREIGN KEY (ide) REFERENCES etapes (ide);
ALTER TABLE activites ADD FOREIGN KEY (idj) REFERENCES journees (idj);
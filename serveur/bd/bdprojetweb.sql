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
  nom VARCHAR(255),
  photoc VARCHAR(255)DEFAULT NULL
);

CREATE TABLE etapes (
  ide INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  debut datetime NOT NULL,
  duree INT NOT NULL,
  hotel VARCHAR(255) NOT NULL,
  photoe VARCHAR(255)DEFAULT NULL
);

CREATE TABLE etapesActivites (
  ide INTEGER NOT NULL,
  ida INTEGER NOT NULL
);

CREATE TABLE activites (
  ida INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  lieu VARCHAR(255),
  datea datetime NOT NULL,
  duree INT NOT NULL,
  description VARCHAR(255) NOT NULL
  
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
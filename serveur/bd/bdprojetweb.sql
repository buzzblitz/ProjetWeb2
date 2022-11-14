-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2022 at 09:47 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdprojetweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `activites`
--

CREATE TABLE `activites` (
  `ida` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lieu` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datea` datetime NOT NULL,
  `duree` int(11) NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `circuits`
--

CREATE TABLE `circuits` (
  `idc` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `photoc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `etat` varchar(2) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `circuitsetapes`
--

CREATE TABLE `circuitsetapes` (
  `ide` int(11) NOT NULL,
  `idc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `connexion`
--

CREATE TABLE `connexion` (
  `idm` int(11) NOT NULL,
  `courriel` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `etat` varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role` varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `etapes`
--

CREATE TABLE `etapes` (
  `ide` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `debut` datetime NOT NULL,
  `duree` int(11) NOT NULL,
  `hotel` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `photoe` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `etapesactivites`
--

CREATE TABLE `etapesactivites` (
  `ide` int(11) NOT NULL,
  `ida` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `membres`
--

CREATE TABLE `membres` (
  `idm` int(11) NOT NULL,
  `prenom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `courriel` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `daten` date DEFAULT NULL,
  `photom` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `membrescircuits`
--

CREATE TABLE `membrescircuits` (
  `idm` int(11) NOT NULL,
  `idc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activites`
--
ALTER TABLE `activites`
  ADD PRIMARY KEY (`ida`);

--
-- Indexes for table `circuits`
--
ALTER TABLE `circuits`
  ADD PRIMARY KEY (`idc`);

--
-- Indexes for table `circuitsetapes`
--
ALTER TABLE `circuitsetapes`
  ADD KEY `ide` (`ide`),
  ADD KEY `idc` (`idc`);

--
-- Indexes for table `connexion`
--
ALTER TABLE `connexion`
  ADD PRIMARY KEY (`idm`);

--
-- Indexes for table `etapes`
--
ALTER TABLE `etapes`
  ADD PRIMARY KEY (`ide`);

--
-- Indexes for table `etapesactivites`
--
ALTER TABLE `etapesactivites`
  ADD KEY `ida` (`ida`),
  ADD KEY `ide` (`ide`);

--
-- Indexes for table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`idm`);

--
-- Indexes for table `membrescircuits`
--
ALTER TABLE `membrescircuits`
  ADD KEY `idm` (`idm`),
  ADD KEY `idc` (`idc`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activites`
--
ALTER TABLE `activites`
  MODIFY `ida` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `circuits`
--
ALTER TABLE `circuits`
  MODIFY `idc` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `etapes`
--
ALTER TABLE `etapes`
  MODIFY `ide` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `membres`
--
ALTER TABLE `membres`
  MODIFY `idm` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `circuitsetapes`
--
ALTER TABLE `circuitsetapes`
  ADD CONSTRAINT `circuitsetapes_ibfk_1` FOREIGN KEY (`ide`) REFERENCES `etapes` (`ide`),
  ADD CONSTRAINT `circuitsetapes_ibfk_2` FOREIGN KEY (`idc`) REFERENCES `circuits` (`idc`);

--
-- Constraints for table `connexion`
--
ALTER TABLE `connexion`
  ADD CONSTRAINT `connexion_ibfk_1` FOREIGN KEY (`idm`) REFERENCES `membres` (`idm`);

--
-- Constraints for table `etapesactivites`
--
ALTER TABLE `etapesactivites`
  ADD CONSTRAINT `etapesactivites_ibfk_1` FOREIGN KEY (`ida`) REFERENCES `activites` (`ida`),
  ADD CONSTRAINT `etapesactivites_ibfk_2` FOREIGN KEY (`ide`) REFERENCES `etapes` (`ide`);

--
-- Constraints for table `membrescircuits`
--
ALTER TABLE `membrescircuits`
  ADD CONSTRAINT `membrescircuits_ibfk_1` FOREIGN KEY (`idm`) REFERENCES `membres` (`idm`),
  ADD CONSTRAINT `membrescircuits_ibfk_2` FOREIGN KEY (`idc`) REFERENCES `circuits` (`idc`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

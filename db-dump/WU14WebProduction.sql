-- phpMyAdmin SQL Dump
-- version 4.2.0
-- http://www.phpmyadmin.net
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 21 feb 2015 kl 01:25
-- Serverversion: 5.6.17
-- PHP-version: 5.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databas: `WU14WebProduction`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `Admins`
--

CREATE TABLE IF NOT EXISTS `Admins` (
`ID` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `description` text,
  `joined` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumpning av Data i tabell `Admins`
--

INSERT INTO `Admins` (`ID`, `firstName`, `lastName`, `email`, `password`, `description`, `joined`) VALUES
(1, 'Tobias', 'Katra', 'tobiaskatra@hotmail.com', 'd033e22ae348aeb5660fc2140aec35850c4da997', NULL, '2015-02-09 14:23:56'),
(5, 'Weeman', 'Heeman', 'trog@gherg.ae', '439546e1b45a6ed5fe12877d31c5a1def8cb0d19', NULL, '2015-02-16 09:50:06'),
(6, 'Qwert', 'Y', 'asd@fgh.jkl', 'a938dfdfbaa1f25ccbc39e16060f73c44e5ef0dd', NULL, '2015-02-16 09:56:53'),
(7, 'ads', 'qwe', 'floor@master.lo', 'bc2a4d3db12d4be19a334ba871062e019f1a11c8', NULL, '2015-02-17 10:26:58'),
(8, 'Loop', 'Pool', 'tool@bax.moo', 'dc958d52ae545ee9f48525466746439aa8f175c8', NULL, '2015-02-17 10:28:24');

-- --------------------------------------------------------

--
-- Tabellstruktur `Images`
--

CREATE TABLE IF NOT EXISTS `Images` (
`ID` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `description` text,
  `adminID` int(11) NOT NULL,
  `uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumpning av Data i tabell `Images`
--

INSERT INTO `Images` (`ID`, `title`, `path`, `alt`, `description`, `adminID`, `uploaded`) VALUES
(1, 'XCOM - Ladies', '2013-04-30_00038.jpg', NULL, NULL, 1, '2015-02-19 13:02:43'),
(2, 'XCOM - Scientist', '2013-05-01_00022.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(3, 'XCOM - Aliens', '2013-10-25_00105.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(4, 'DayZ - Finger', '2014-06-01_00003.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(5, 'DayZ - Toilet', '2014-06-01_00009.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(6, 'DayZ - Beach', '2014-06-04_00011.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(7, 'DayZ - Sky', '2014-06-04_00021.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(8, 'DayZ - Head Butt', '2014-06-09_00018.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(9, 'Skyrim - Northen Lights', '2014-06-29_00018.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(10, 'Skyrim - Fist Fight', '2014-06-29_00057.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(11, 'Skyrim - Ledge', '2014-07-04_00012.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(12, 'Skyrim - Dragon', '2014-07-06_00011.jpg', NULL, NULL, 1, '2015-02-19 13:02:44'),
(13, 'Dark Souls - Crow', 'DS_9.png', NULL, NULL, 1, '2015-02-19 13:02:44'),
(14, 'Dark Souls - Dragon', 'DS_10.png', NULL, NULL, 1, '2015-02-19 13:02:44');

-- --------------------------------------------------------

--
-- Tabellstruktur `MenuLink`
--

CREATE TABLE IF NOT EXISTS `MenuLink` (
`ID` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `weight` int(11) DEFAULT '0',
  `menuID` varchar(255) NOT NULL,
  `parentID` int(11) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumpning av Data i tabell `MenuLink`
--

INSERT INTO `MenuLink` (`ID`, `title`, `path`, `weight`, `menuID`, `parentID`) VALUES
(6, 'Tools', 'tools', 0, 'main-menu', NULL);

-- --------------------------------------------------------

--
-- Tabellstruktur `Menus`
--

CREATE TABLE IF NOT EXISTS `Menus` (
  `ID` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Menus`
--

INSERT INTO `Menus` (`ID`, `title`) VALUES
('main-menu', 'Main Menu');

-- --------------------------------------------------------

--
-- Tabellstruktur `Pages`
--

CREATE TABLE IF NOT EXISTS `Pages` (
`ID` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text,
  `adminID` int(11) NOT NULL,
  `imageID` int(11) NOT NULL,
  `uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumpning av Data i tabell `Pages`
--

INSERT INTO `Pages` (`ID`, `title`, `body`, `adminID`, `imageID`, `uploaded`) VALUES
(1, 'News', 'This is the news section, enjoy.', 1, 6, '2015-02-20 14:28:29'),
(2, 'Cool stuff', 'You never know where you might find them...', 1, 5, '2015-02-20 14:33:48'),
(3, 'Glorph', 'Let''s just call this dragon that.', 1, 12, '2015-02-20 19:33:02'),
(4, 'dfgfdgdg', 'ertretret', 1, 1, '2015-02-20 19:43:55'),
(5, 'Swag', 'Lookin'' good!', 1, 1, '2015-02-20 19:46:30'),
(6, 'dfgfd', 'xcvxcxcvxc', 1, 1, '2015-02-20 22:50:09'),
(7, 'gerph jool', 'blargh', 1, 1, '2015-02-20 22:50:46'),
(8, 'fcfgcfgcfgc', 'gyuhuhuhuh', 1, 1, '2015-02-20 22:52:24'),
(9, 'cftcft', 'vgygvyvgy', 1, 1, '2015-02-20 22:56:15'),
(10, 'dfgfdgfdretret', 'xcrfserser', 1, 1, '2015-02-20 22:57:41'),
(11, 'dgfdgfdgfdgfdg', 'fcghfdgrdser', 1, 1, '2015-02-20 23:00:08'),
(12, 'sdfsdfsdrfwserwer', 'ghjghjghuifuyity', 1, 1, '2015-02-20 23:01:24'),
(13, 'Work stuff', 'Work work...', 1, 1, '2015-02-20 23:04:43'),
(14, 'Tools', 'Shuff', 1, 4, '2015-02-20 23:29:59');

-- --------------------------------------------------------

--
-- Tabellstruktur `UrlAlias`
--

CREATE TABLE IF NOT EXISTS `UrlAlias` (
`ID` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `pageID` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumpning av Data i tabell `UrlAlias`
--

INSERT INTO `UrlAlias` (`ID`, `path`, `pageID`) VALUES
(1, 'news', 1),
(2, 'cool-stuff', 2),
(3, 'glorph', 3),
(4, 'dfgfdgdg', 4),
(5, 'swag', 5),
(6, 'dfgfd', 6),
(7, 'gerph-jool', 7),
(8, 'fcfgcfgcfgc', 8),
(9, 'cftcft', 9),
(10, 'dfgfdgfdretret', 10),
(11, 'dgfdgfdgfdgfdg', 11),
(12, 'sdfsdfsdrfwserwer', 12),
(13, 'work-stuff', 13),
(14, 'tools', 14);

-- --------------------------------------------------------

--
-- Tabellstruktur `Videos`
--

CREATE TABLE IF NOT EXISTS `Videos` (
`ID` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `description` text,
  `adminID` int(11) NOT NULL,
  `uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `Admins`
--
ALTER TABLE `Admins`
 ADD PRIMARY KEY (`ID`), ADD UNIQUE KEY `email` (`email`);

--
-- Index för tabell `Images`
--
ALTER TABLE `Images`
 ADD PRIMARY KEY (`ID`), ADD KEY `adminID` (`adminID`);

--
-- Index för tabell `MenuLink`
--
ALTER TABLE `MenuLink`
 ADD PRIMARY KEY (`ID`), ADD KEY `menuID` (`menuID`), ADD KEY `parentID` (`parentID`);

--
-- Index för tabell `Menus`
--
ALTER TABLE `Menus`
 ADD PRIMARY KEY (`ID`);

--
-- Index för tabell `Pages`
--
ALTER TABLE `Pages`
 ADD PRIMARY KEY (`ID`), ADD KEY `adminID` (`adminID`), ADD KEY `imageID` (`imageID`);

--
-- Index för tabell `UrlAlias`
--
ALTER TABLE `UrlAlias`
 ADD PRIMARY KEY (`ID`), ADD KEY `pageID` (`pageID`);

--
-- Index för tabell `Videos`
--
ALTER TABLE `Videos`
 ADD PRIMARY KEY (`ID`), ADD KEY `adminID` (`adminID`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `Admins`
--
ALTER TABLE `Admins`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT för tabell `Images`
--
ALTER TABLE `Images`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT för tabell `MenuLink`
--
ALTER TABLE `MenuLink`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT för tabell `Pages`
--
ALTER TABLE `Pages`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT för tabell `UrlAlias`
--
ALTER TABLE `UrlAlias`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT för tabell `Videos`
--
ALTER TABLE `Videos`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `Images`
--
ALTER TABLE `Images`
ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `Admins` (`ID`);

--
-- Restriktioner för tabell `MenuLink`
--
ALTER TABLE `MenuLink`
ADD CONSTRAINT `menulink_ibfk_1` FOREIGN KEY (`menuID`) REFERENCES `Menus` (`ID`),
ADD CONSTRAINT `menulink_ibfk_2` FOREIGN KEY (`parentID`) REFERENCES `MenuLink` (`ID`);

--
-- Restriktioner för tabell `Pages`
--
ALTER TABLE `Pages`
ADD CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `Admins` (`ID`),
ADD CONSTRAINT `pages_ibfk_2` FOREIGN KEY (`imageID`) REFERENCES `Images` (`ID`);

--
-- Restriktioner för tabell `UrlAlias`
--
ALTER TABLE `UrlAlias`
ADD CONSTRAINT `urlalias_ibfk_1` FOREIGN KEY (`pageID`) REFERENCES `Pages` (`ID`);

--
-- Restriktioner för tabell `Videos`
--
ALTER TABLE `Videos`
ADD CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `Admins` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

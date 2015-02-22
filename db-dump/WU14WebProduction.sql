-- phpMyAdmin SQL Dump
-- version 4.2.0
-- http://www.phpmyadmin.net
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 22 feb 2015 kl 15:42
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- Dumpning av Data i tabell `MenuLink`
--

INSERT INTO `MenuLink` (`ID`, `title`, `path`, `weight`, `menuID`, `parentID`) VALUES
(6, 'Tools', 'tools', 0, 'main-menu', NULL),
(7, 'House of Disaster', 'house-of-disaster', 0, 'main-menu', NULL),
(8, 'Loop urpur', 'loop-urpur', 0, 'main-menu', NULL),
(9, 'Madness', 'madness', 0, 'main-menu', 7),
(10, 'Crazy Stuff', 'crazy-stuff', 0, 'main-menu', 9),
(11, 'Foo', 'foo', 0, 'main-menu', 6),
(12, 'Mess of Halls', 'mess-of-halls', 5, 'main-menu', 7),
(13, 'Ghost squad', 'ghost-squad', 0, 'main-menu', 7),
(14, 'Mouse house', 'mouse-house', 0, 'main-menu', NULL),
(15, 'House entrance', 'house-entrance', 0, 'main-menu', 14),
(16, 'Bar', 'bar', 0, 'main-menu', 11),
(17, 'Power', 'power', 0, 'main-menu', 6),
(18, 'True ghosts!', 'true-ghosts', 0, 'main-menu', 13),
(19, 'Kjogher Struller', 'kjogher-struller', 0, 'main-menu', 8),
(20, 'Chill', 'chill', 1, 'main-menu', 7),
(21, 'Opening', 'opening', 0, 'main-menu', 14),
(22, 'Truth', 'truth', 0, 'main-menu', 9),
(23, 'Shwooury Fuer Glorgh', 'shwooury-fuer-glorgh', 0, 'main-menu', 8),
(24, 'Pill', 'pill', 0, 'main-menu', 20);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=38 ;

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
(14, 'Tools', 'Shuff', 1, 4, '2015-02-20 23:29:59'),
(15, 'House of Disaster', '\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae porta odio. Nulla accumsan est velit, eget bibendum leo dictum ullamcorper. Ut non vehicula neque. Integer blandit enim eu suscipit ultrices. In rhoncus aliquam luctus. In non fermentum velit. Nulla nec mauris eleifend, pharetra lorem eu, euismod eros. Nullam pulvinar auctor turpis id sollicitudin. Quisque sodales maximus tortor eu consequat.\n\nAliquam pulvinar leo nisi, et volutpat mi tempus vel. Aenean posuere nunc arcu, in tempus tellus pulvinar id. Nullam commodo gravida pretium. Vivamus ullamcorper nulla non turpis tincidunt, sit amet vulputate odio consequat. Vivamus ullamcorper mi odio, a congue diam tincidunt ac. Curabitur accumsan tempor maximus. Maecenas molestie elementum tellus eget finibus. Etiam vitae urna nibh. In vel diam nisi. Nullam condimentum mauris et elementum ornare. Nullam quis lacus urna. In odio justo, facilisis vel justo id, feugiat malesuada turpis. Donec mollis sapien mattis aliquet hendrerit.\n\nPraesent eu blandit tellus. Praesent non vehicula metus. Praesent et blandit dui, nec sagittis massa. Donec consectetur ipsum tortor, eu porta nulla molestie sed. In est nibh, fringilla sed ullamcorper et, vulputate non augue. Nulla maximus scelerisque nibh, eget tristique quam fermentum ornare. Fusce a pharetra ligula. Sed eget lacus erat. Sed mattis viverra hendrerit. Sed sit amet laoreet velit. Sed ut tempus nibh, ac malesuada sapien. Proin eget diam id mauris rhoncus malesuada id vitae eros.\n\nVestibulum cursus aliquet nulla et tincidunt. Nunc tellus turpis, vulputate nec eros vel, luctus hendrerit enim. Duis ut dui sodales, posuere massa a, egestas massa. Etiam vulputate elit sed nisl congue, porta sollicitudin tellus pulvinar. Fusce eget laoreet diam. Phasellus mi erat, auctor sit amet quam eget, suscipit euismod felis. Nulla facilisi. Cras quis malesuada ex, suscipit accumsan lectus. Fusce ut nisl ante.\n\nDuis libero lorem, vulputate porttitor odio quis, tincidunt bibendum orci. Vestibulum mi ante, pulvinar non metus et, tempus eleifend arcu. Ut facilisis imperdiet nulla sed porttitor. Nulla nec felis luctus, commodo lorem in, dictum diam. Quisque eu ante ex. Morbi vel efficitur urna. Ut suscipit odio tortor, eget consequat dolor eleifend et. Donec porttitor vehicula dolor quis pharetra. Maecenas porttitor bibendum erat vitae feugiat. Nunc tellus mi, vehicula vitae interdum in, convallis varius ante. Etiam tincidunt, nisi vitae consectetur sodales, purus sem iaculis nisi, a vulputate neque purus nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel vulputate justo. Aliquam et ex pharetra, euismod erat id, facilisis nisi. Nam convallis fringilla metus, in sollicitudin lorem tempus pharetra. ', 1, 8, '2015-02-21 13:07:43'),
(16, 'New page', 'Arghorph and stuff\n\nDid you no that spelling ish nut the easiest thisng to du?', 1, 3, '2015-02-21 13:12:02'),
(17, 'Wupp Wupp', 'Wauw WOOW Hou', 1, 2, '2015-02-21 13:34:57'),
(18, 'Plorpus', 'Slooorpus', 1, 7, '2015-02-21 13:51:40'),
(19, 'Syrsa', 'Syrsor är\nCoola\ntror \n\njag', 1, 11, '2015-02-21 14:19:56'),
(20, 'Plarghur', 'URGUUR!', 1, 1, '2015-02-21 21:17:34'),
(21, 'Loop urpur', 'OH NOH!!', 1, 13, '2015-02-21 21:18:28'),
(22, 'Madness', 'It''s all around us\nYou can''t smell it\nYou can''t feel it\nBut you know it''s there...', 1, 10, '2015-02-22 00:19:15'),
(23, 'Crazy Stuff', 'Madness never ends\nEspecially with this crazy stuff!', 1, 12, '2015-02-22 00:43:57'),
(24, 'Foo', 'Bar', 1, 11, '2015-02-22 13:13:52'),
(25, 'Mess of Halls', 'Be wary of the dragon\nHe bites!', 1, 14, '2015-02-22 13:15:50'),
(26, 'Ghost squad', 'Why can''t we find the ghosts?', 1, 5, '2015-02-22 13:17:58'),
(27, 'Mouse house', 'We found something interesting in the mouse house...\nA plasma rifle!?', 1, 2, '2015-02-22 13:22:42'),
(28, 'House entrance', 'Go get ''em', 1, 1, '2015-02-22 15:08:24'),
(29, 'Bar', 'What we need now is a beach bar', 1, 6, '2015-02-22 15:11:15'),
(30, 'Power', 'Feel the power of my power tools!', 1, 3, '2015-02-22 15:12:45'),
(31, 'True ghosts!', 'True ghosts never show their faces!\nBut might be in the sky...', 1, 9, '2015-02-22 15:15:39'),
(32, 'Kjogher Struller', 'Wham', 1, 14, '2015-02-22 15:18:14'),
(33, 'Chill', 'Take a time out and just chill...', 1, 7, '2015-02-22 15:19:25'),
(34, 'Opening', 'Not that opening!', 1, 8, '2015-02-22 15:21:16'),
(35, 'Truth', 'Search deep inside you and you will find it', 1, 11, '2015-02-22 15:24:55'),
(36, 'Shwooury Fuer Glorgh', 'Yupp, the northen lights are pretty.', 1, 9, '2015-02-22 15:26:32'),
(37, 'Pill', 'Here have some these plasma pills', 1, 2, '2015-02-22 15:28:37');

-- --------------------------------------------------------

--
-- Tabellstruktur `UrlAlias`
--

CREATE TABLE IF NOT EXISTS `UrlAlias` (
`ID` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `pageID` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=38 ;

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
(14, 'tools', 14),
(15, 'house-of-disaster', 15),
(16, 'new-page', 16),
(17, 'wupp-wupp', 17),
(18, 'plorpus', 18),
(19, 'syrsa', 19),
(20, 'plarghur', 20),
(21, 'loop-urpur', 21),
(22, 'madness', 22),
(23, 'crazy-stuff', 23),
(24, 'foo', 24),
(25, 'mess-of-halls', 25),
(26, 'ghost-squad', 26),
(27, 'mouse-house', 27),
(28, 'house-entrance', 28),
(29, 'bar', 29),
(30, 'power', 30),
(31, 'true-ghosts', 31),
(32, 'kjogher-struller', 32),
(33, 'chill', 33),
(34, 'opening', 34),
(35, 'truth', 35),
(36, 'shwooury-fuer-glorgh', 36),
(37, 'pill', 37);

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
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT för tabell `Pages`
--
ALTER TABLE `Pages`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT för tabell `UrlAlias`
--
ALTER TABLE `UrlAlias`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
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

-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           5.7.11 - MySQL Community Server (GPL)
-- Serveur OS:                   Win64
-- HeidiSQL Version:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Export de la structure de la base pour bpclight
CREATE DATABASE IF NOT EXISTS `bpclight` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bpclight`;


-- Export de la structure de table bpclight. medic_gen
CREATE TABLE IF NOT EXISTS `medic_gen` (
  `kage` int(11) NOT NULL,
  `gen_perso` text,
  `gen_family` text,
  `gen_posterisque` tinyint(4) DEFAULT NULL,
  `gen_dossierdemande` tinyint(4) DEFAULT NULL,
  `gen_dossierrecu` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`kage`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Export de données de la table bpclight.medic_gen: 22 rows
DELETE FROM `medic_gen`;
/*!40000 ALTER TABLE `medic_gen` DISABLE KEYS */;
INSERT INTO `medic_gen` (`kage`, `gen_perso`, `gen_family`, `gen_posterisque`, `gen_dossierdemande`, `gen_dossierrecu`) VALUES
	(614, 'aaa', 'bbbb xxx aaaa', NULL, NULL, NULL),
	(2665, '', 'test', NULL, NULL, NULL),
	(382, 'AT 2010 chute avec tassement de L3', '', NULL, NULL, NULL),
	(453, 'Thyroïdectomie 2011/Basedow (exophtalmie)<div>Ménisectomie droite 2011</div><div>Lithiase rénale 2015: suivi</div><div>stabisme opéré en 93</div>', 'Père DCD insuf rénale diabétique<div>Mère DCD Cröhn</div>', NULL, NULL, NULL),
	(2407, 'syndrome dépressif 2004<div>rechute en 2015</div><div>agénésie incisives inf; : implant 2015: soins / gingivite chronique</div>', '', NULL, NULL, NULL),
	(2406, 'chutes récurrentes sans tb neuro / genu valgus prononcé:&nbsp;<div><span style="white-space:pre">	</span>-2002: fractures multiples MI</div><div><span style="white-space:pre">	</span>-2011: lésion épaule</div>', '', NULL, NULL, NULL),
	(2364, 'RAS', 'Mère: K Sein (1993)<div>Père: ablation prostate</div><div>Gd père : K colon</div><div><br></div><div>2 frères : RAS</div>', NULL, NULL, NULL),
	(2698, 'AT: 0<div>Pas de tb neuro;</div><div>&nbsp;pas de tb ORL: tympans Nx</div>', 'Mère : Diabète ID mais 2<div>Père : K rectum (DCD)</div>', NULL, NULL, NULL),
	(214, '5/2015: occlusion intestinal sur masse bénigne, pas de nécrose, pas de résection', '<b>Père: DCD AVC 2008</b><hr><div><br></div><div><b>Mère: K utérus 2015 + TRT</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL),
	(449, '0', '<b>Père</b><hr><div><br></div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL),
	(538, 'Allergies récurrentes, suivies mais en augmentation: désensibilisation prévue<div>Hypercholestérolémie: suivi mais aussi gamma GT élevée, (pas d\'addiction reconnue, mais allègue une consommation quotidienne)</div>', '<b>Père: 91; suicide</b><hr><div><br></div><div><b>Mère: hypercholestérolémie</b><hr></div><div><b><br></b></div><div><b>Fratrie: 2 soeurs</b><hr></div>', NULL, NULL, NULL),
	(1990, 'fracture plateau tibial gauche 9/2012', '<b>Père</b><hr><div><br></div><div><b>Mère: nodule thyroïdien: ablation</b><hr></div><div><b><br></b></div><div><b>Fratrie: 1 soeur</b><hr></div>', NULL, NULL, NULL),
	(492, '2008: PNO sans séquelles<div>2002: accident domestique : cataracte traumatique: &nbsp;Xir cristallin</div>', '<b>Père</b><hr><div><br></div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL),
	(1891, 'CH pour fièvre boutonneuse méditerranéenne ,avec Sd méningé: 1 mois; pas de séquelles<div><br></div>', '<b>Père:&nbsp;</b><hr><div><br></div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie: 2 soeurs</b><hr></div>', NULL, NULL, NULL),
	(511, '', '<b>Père</b><hr><div>test</div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL),
	(2384, '-', '<b>Père</b><hr><div><br></div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL),
	(1250, '-', '<b>Père</b><hr><div><br></div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL),
	(2092, 'skdfuienncfjkf', '<b>Père</b><hr><div><br></div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL),
	(2683, '-', '<b>Père: fkfjjsdh</b><hr><div><br></div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL),
	(199, '8/1999: purpura rhumatoïde intestinal: vascularite intestinale: résection 10 cm. Séquelle immédiate: Coma septique, puis coma sédatif 1 mois, ss Trt. et intubation<div><br><div>Pose d\'une prothèse trachéale</div><div>suivi pneumo/ mois<br><div><br></div><div>2/2014: K du colon: Xir avec résection 15 cm , pas d\'envahissement LR; suivi à 6 mois avec scanner et écho(Xir Dr Camerlo, Gastro: Bensimon)</div></div></div>', '<b>Père: DCD Infarctus 2000</b><hr><div><br></div><div><b>Mère: DCD 1987 K Hépatique lié à un mélanome</b><hr></div><div><b><br></b></div><div><b>Fratrie: 2 frères dt Frère jumeau PR MI à 10 ans: RAS</b><hr></div>', NULL, NULL, NULL),
	(2141, '-', '<b>Père</b><hr><div><br></div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL),
	(40, '-', '<b>Père</b><hr><div><br></div><div><b>Mère</b><hr></div><div><b><br></b></div><div><b>Fratrie</b><hr></div>', NULL, NULL, NULL);
/*!40000 ALTER TABLE `medic_gen` ENABLE KEYS */;


-- Export de la structure de table bpclight. medic_rdv
CREATE TABLE IF NOT EXISTS `medic_rdv` (
  `rdv_id` int(11) NOT NULL AUTO_INCREMENT,
  `ResourceId` int(11) DEFAULT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `resultat` int(11) DEFAULT NULL,
  `nature` int(11) DEFAULT NULL,
  `kage` int(11) DEFAULT NULL,
  PRIMARY KEY (`rdv_id`),
  UNIQUE KEY `rdv_id_UNIQUE` (`rdv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- Export de données de la table bpclight.medic_rdv: ~17 rows (environ)
DELETE FROM `medic_rdv`;
/*!40000 ALTER TABLE `medic_rdv` DISABLE KEYS */;
INSERT INTO `medic_rdv` (`rdv_id`, `ResourceId`, `StartDate`, `EndDate`, `Name`, `resultat`, `nature`, `kage`) VALUES
	(8, 1, '2016-07-28 10:00:00', '2016-07-28 12:00:00', 'Philippe AUJAS', NULL, NULL, NULL),
	(9, 1, '2016-07-26 10:00:00', '2016-07-26 12:00:00', 'Philippe AUJAS', NULL, NULL, NULL),
	(10, 1, '2016-07-26 13:00:00', '2016-07-26 15:30:00', 'Philippe AUJAS', NULL, NULL, NULL),
	(11, 1, '2016-07-30 12:30:00', '2016-07-30 14:30:00', 'Philippe AUJAS', NULL, NULL, NULL),
	(12, 1, '2016-07-27 13:30:00', '2016-07-27 15:30:00', 'Claude ALLIBERT', NULL, NULL, NULL),
	(13, 1, '2016-07-29 11:30:00', '2016-07-29 14:30:00', 'Claude ALLIBERT', NULL, NULL, 2199),
	(14, 1, '2016-07-27 11:00:00', '2016-07-27 13:00:00', 'Bastien ABALOS', NULL, NULL, 2769),
	(15, 1, '2016-07-27 09:00:00', '2016-07-27 10:30:00', 'Claude ALLIBERT', NULL, NULL, 2199),
	(16, 1, '2016-07-25 10:00:00', '2016-07-25 10:30:00', 'Stéphane ZUCATTI', NULL, NULL, 614),
	(17, 1, '2016-07-28 13:30:00', '2016-07-28 16:00:00', 'Stéphane ZUCATTI', 2, 3, 614),
	(18, 1, '2016-07-25 12:00:00', '2016-07-25 13:30:00', 'Christophe ENDERLE', NULL, NULL, 2270),
	(19, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(20, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(21, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(22, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(23, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(24, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `medic_rdv` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

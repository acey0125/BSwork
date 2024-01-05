USE bs;
CREATE TABLE `user` (
  `id` int(16) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '',
  `password` varchar(128) NOT NULL DEFAULT '',
  `email` varchar(128) UNIQUE NOT NULL DEFAULT '',
  `phone` varchar(128) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `device` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) UNIQUE NOT NULL DEFAULT '',
  `description` varchar(256),
  `userid` int(11) NOT NULL DEFAULT 0,
  `kind` int NOT NULL DEFAULT 1,
  `activate` varchar(128) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `message` (
    `device` varchar(128) NOT NULL,
    `alert` int NOT NULL DEFAULT 0,
    `info` varchar(128) NOT NULL DEFAULT '',
    `lat` numeric(18, 15) NOT NULL DEFAULT 0,
    `lng` numeric(18, 15) NOT NULL DEFAULT 0,
    `stamp` varchar(128) NOT NULL DEFAULT '',
    `value` int NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user` VALUES(null, 'admin', '111111', '123456789@zju.com', '110');
INSERT INTO `device` VALUES(null, 'device0001', 'dev1', '1', '1');
INSERT INTO `device` VALUES(null, 'device0002', 'dev2', '1', '2');
INSERT INTO `device` VALUES(null, 'device0003', 'dev3', '1', '1');
INSERT INTO `device` VALUES(null, 'device0004', 'dev4', '1', '3');
INSERT INTO `device` VALUES(null, 'device0005', 'dev5', '1', '4');
-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `articles` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`date` date NOT NULL,
	`body` text NOT NULL,
	`topic_id` int);
--> statement-breakpoint
CREATE TABLE `topics` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`topic` varchar(255) NOT NULL);
--> statement-breakpoint
CREATE INDEX `topic_id_idx` ON `articles` (`topic_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `topic` ON `topics` (`topic`);
*/
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema qa
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `qa` ;

-- -----------------------------------------------------
-- Schema qa
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `qa` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `qa` ;

-- -----------------------------------------------------
-- Table `qa`.`questions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `qa`.`questions` ;

CREATE TABLE IF NOT EXISTS `qa`.`questions` (
  `qID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `question` TEXT NOT NULL,
  PRIMARY KEY (`qID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `qa`.`answers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `qa`.`answers` ;

CREATE TABLE IF NOT EXISTS `qa`.`answers` (
  `aID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `answer` TEXT NOT NULL,
  `vote` INT NOT NULL,
  `qID` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`aID`, `qID`),
  INDEX `fk_answers_questions_idx` (`qID` ASC) VISIBLE,
  CONSTRAINT `fk_answers_questions`
    FOREIGN KEY (`qID`)
    REFERENCES `qa`.`questions` (`qID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

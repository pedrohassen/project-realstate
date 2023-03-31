-- CreateTable
CREATE TABLE `realty_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dorms` INTEGER NOT NULL,
    `bathrooms` INTEGER NOT NULL,
    `livingrooms` INTEGER NOT NULL,
    `kitchen` INTEGER NOT NULL,
    `suites` INTEGER NOT NULL,
    `parking_spots` INTEGER NOT NULL,
    `total_area` INTEGER NOT NULL,
    `private_area` INTEGER NOT NULL,
    `land_size` INTEGER NOT NULL,
    `topography` VARCHAR(191) NOT NULL,
    `sale_pricing` DOUBLE NOT NULL,
    `rent_pricing` DOUBLE NOT NULL,
    `condominium_pricing` DOUBLE NOT NULL,
    `tax` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

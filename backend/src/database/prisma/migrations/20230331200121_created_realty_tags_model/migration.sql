-- CreateTable
CREATE TABLE `realty_tags` (
    `tag_id` INTEGER NOT NULL,
    `realty_id` INTEGER NOT NULL,

    PRIMARY KEY (`tag_id`, `realty_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

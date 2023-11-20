'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // Define the many-to-many relationship
    //---------------------------------------------------------
    // await removeConstraint('User', 'Liked')
    // await removeConstraint('Product', 'Likers')
    // await queryInterface.addConstraint('Review', {
    //   fields: ['UserId', 'PostId'],
    //   type: 'primary key',
    //   name: 'UserPosts_pkey',
    // });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};

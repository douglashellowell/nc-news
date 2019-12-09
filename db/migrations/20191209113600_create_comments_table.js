exports.up = function(knex) {
	console.log('creating comments table    .... 🎄');
	return knex.schema.createTable('comments', table => {
		table.increments('comment_id').primary();
		table.string('author').references('users.username');
		table.integer('article_id').references('articles.article_id');
		table.integer('votes').defaultTo(0);
		table.timestamps();
		table.string('body'); // << string Vs. text ?
	});
};

exports.down = function(knex) {
	console.log('dropping comments table    . 💣');
	return knex.schema.dropTable('comments');
};
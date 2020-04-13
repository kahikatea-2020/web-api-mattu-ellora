const table = 'activities'

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex(table).del()
    .then(() => {
      // Inserts seed entries
      return knex(table).insert([
        { id: 1, user_id: 99914, name: 'Bowling', frequency: 'Weekly', level: 'Beginner' },
        { id: 2, user_id: 99905, name: 'Fishing', frequency: 'Monthly', level: 'Moderate' },
        { id: 3, user_id: 99902, name: 'Basketball', frequency: 'Daily', level: 'Advanced' },
        { id: 4, user_id: 99905, name: 'Dancing', frequency: 'Weekly', level: 'Beginner' },
        { id: 5, user_id: 99901, name: 'Reading', frequency: 'Daily', level: 'Advanced' }
      ])
    })
}

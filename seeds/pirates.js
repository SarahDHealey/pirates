// exports.seed = function(knex, Promise) {
//                 return knex(table.name).del()
//             .then(function(){
//                 return knex(table_name).del()
//             .then(function(){
//               return knex(table_name).del()
//             })
//           })
// };



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pirates').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('pirates').insert({
          id: 1,
          name: 'Bree',
          poison: 'rum',
          accessory: 'pet tiger',
          image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHxwco66sA_KsH5X4ytwn9f196RBQwIfRuhRCqzkDwqb0C5VL'
        }),
        knex('pirates').insert({
          id: 2,
          name: 'Austin',
          poison: 'fireballs',
          accessory: 'pet viper',
          image_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPF-A3zJL4izwkhezgHrH1KlWZo9sb-a1qNhZvSPH2EoqTRIW4'
        }),
        knex('pirates').insert({
          id: 3,
          name: 'Georgia',
          poison: 'whiskey',
          accessory: 'pet hawk',
          image_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3G5fK99vASRbAKi65ZeFibJgRSE21m6LZ7irPKlojZJbwhiTL'
        })
      ]);
    });
};

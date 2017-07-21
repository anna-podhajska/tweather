
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 21, weather_id: 1,
          text: 'I was getting ready for a tag sale one summer day. Since it was so humid out, I decided to stay inside my air-conditioned house and mark the special stickers I had bought for the sale. Then I slapped them on my blouse, ran outside, stuck them on the appropriate items and rushed back inside. I did this until every item was labeled. Later that day a UPS man came by the house with a delivery. I noticed that as I was signing for the package, he seemed ill at ease. It was only after he left that I noticed there was one sticker still attached to the front of my blouse. It read “Make me an offer.”',
          name: 'Anthony', location: 'Dublin', date: "1/07/2017"},
        {id: 22, weather_id: 1, text:
          'Before heading on vacation, I went to a tanning salon. I was under the lights so long the protective eye shades I wore left a big white circle around each eye. Gazing at myself in the mirror the next day, I thought, “Man, I look like a clown.” I had almost convinced myself I was overreacting — until I was in line at the grocery store. I felt a tug at my shirt and looked down to see a toddler staring up at me, Are you giving out balloons? he asked.',
          name: 'Annelise', location: 'Warsaw', date: "2/07/2017"},
        {id: 23, weather_id: 6,
          text: 'On a recent vacation at a resort with my in-laws, we planned to spend an afternoon at the pool with our kids. We wanted to bring our own drinks, but were unsure of the hotel’s policy. My brother-in-law called the front desk, and assuming everyone was familiar with the brand of ice chest he had, asked if it was all right if he brought a Playmate to the pool. After a pause the clerk asked, “Does she have her own towel?”',
          name: 'Usha', location: 'Blenheim', date: "3/07/2017"},
        {id: 24, weather_id: 2,
          text: 'Vacationing in Vermont, I picked up the local paper to check out the forecast. It read: Today: Sunny, 76. Tonight: Not so sunny, 55.',
          name: 'Anna', location: 'Vermont', date: "4/07/2017"},
        {id: 25, weather_id: 3,
          text: 'Climate change --- While in the men’s room at a beach park in Florida, I noticed they had a plastic baby-changing table installed on the wall. Apparently, some sportsmen had co-opted this politically correct amenity for their own use. Above the table was a sign saying: “It is unlawful to clean fish on this table.”',
          name: 'Ulla', location: 'Wellington', date: "4/07/2017"},
        {id: 26, weather_id: 3,
          text: 'According to a news story, if global warming continues, in 20 years the only chance we’ll have to see a polar bear is in a zoo. So in other words, nothing is going to change.',
          name: 'Anna', location: 'Warsaw', date: "8/07/2017"},
        {id: 27, weather_id: 4,
          text: 'I like how it is today!',
          name: 'Mickey Mouse', location: 'Blenheim', date: "7/07/2017"},
        {id: 28, weather_id: 5,
          text: 'We use a really strong sunblock when we go to the beach with the kids. It’s SPF 80: You squeeze the tube, and a sweater comes out.',
          name: 'Margaret', location: 'Wellington', date: "6/07/2017"},
        {id: 29, weather_id: 5,
          text: 'Don’t knock the weather. If it didn’t change once in a while, nine tenths of the people couldn’t start a conversation.',
          name: 'Tomas', location: 'NY', date: "10/08/2016"},
      ]);
    });
};

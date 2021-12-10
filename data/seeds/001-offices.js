const offices = [
    { name: 'Western Dental', address: '1234 west st' },
    { name: 'Eastern Dental', address: '1234 east st' },
    { name: 'Southern Dental', address: '1234 south st' },
    { name: 'Northern Dental', address: '1234 north st' },
]

exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('offices')
        .truncate()
        .then(function () {
            return knex('offices').insert(offices);
        });
};

exports.offices = offices

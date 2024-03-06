export default function (users) {
    const result = {};

    users.filter(user => user.gender === 'male')
        .map(user => user.birthday.slice(0, 4))
        .forEach(year => {
            if (Object.hasOwn(result, year)) {
                result[year] += 1;
            } else {
                result[year] = 1;
            }
        });
    return result;
}
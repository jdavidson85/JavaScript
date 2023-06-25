function Holiday() {
    const months = ["Jan", " Feb", " Mar", " Apr", " May", " Jun", " July", " August", " Sep", " Oct", " Nov", " Dec"]
    document.getElementById("array").innerHTML = months;
    const holidays = { Jan: " New Years 1st ", Feb: " Valentines 13th ", Mar: " patriots day 1st ", Apr: " National Day  1st", May: " Cinco de Mayo 5th", Jun: " Presidents Day 17th", Jul: " Independence Day 4th", Aug: " Flags Day 18th", Sep: " Labor day 1st", Oct: " Halloween 31st ", Nov: " Thanksgiving 24th ", Dec: " Christmas 24th " }
    document.getElementById("object").innerHTML = holidays.Jan + holidays.Feb + holidays.May + holidays.Jul + holidays.Sep + holidays.Oct + holidays.Nov + holidays.Dec;

}
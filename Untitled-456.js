// Buatlah function yang dapat digunakan oleh kasir untuk menghitung nilai uang kembalian
//  beserta dengan pecahan uang yang bisa diberikan. Input berupa total belanja dan jumlah 
//  uang yang dibayarkan oleh pembeli. Output berupa kembalian (dibulatkan ke bawah Rp.100) 
//  yang harus diberikan kasir dengan detail pecahan uang yang harus diberikan. Pecahan yang 
//  tersedia adalah: 100.000, 50.000, 20.000, 10.000, 5.000, 2.000, 1.000, 500, 200, 100.

// money = 300000
// jumlahbelanja = 155200
function mesin(money, jumlahBelanja){
    let kembalian = money - jumlahBelanja
    // let cash = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
    if ( money > jumlahBelanja ){
        let seratusribu =   Math.floor(kembalian / 100000)
        kembalian=kembalian%100000
        console.log(`${seratusribu} lembar RP:100000`)
        seratusribu =   Math.floor(kembalian / 50000)
        kembalian=kembalian%50000
        console.log(`${seratusribu} lembar RP:50000`)
        seratusribu =   Math.floor(kembalian / 20000)
        kembalian=kembalian%20000
        console.log(`${seratusribu} lembar RP:20000`)
        seratusribu =   Math.floor(kembalian / 10000)
        kembalian=kembalian%10000
        console.log(`${seratusribu} lembar RP:10000`)
        seratusribu =   Math.floor(kembalian / 5000)
        kembalian=kembalian%5000
        console.log(`${seratusribu} lembar RP:5000`)
        seratusribu =   Math.floor(kembalian / 2000)
        kembalian=kembalian%2000
        console.log(`${seratusribu} lembar RP:2000`)
        seratusribu =   Math.floor(kembalian / 1000)
        kembalian=kembalian%1000
        console.log(`${seratusribu} lembar RP:1000`)
        seratusribu =   Math.floor(kembalian / 500)
        kembalian=kembalian%500
        console.log(`${seratusribu} lembar RP:500`)
        seratusribu =   Math.floor(kembalian / 200)
        kembalian=kembalian%200
        console.log(`${seratusribu} lembar RP:200`)
        seratusribu =   Math.floor(kembalian / 100)
        kembalian=kembalian%100
        console.log(`${seratusribu} lembar RP:100`)
    }
}

console.log(mesin(200000, 155200))
// kembalian = 145800
//   145800 % 100000 = 45800
//  45800 % 40000 = 5800
// 5800 % 5000 = 800
// 800 % 800 = 0

function prime() {
    for (let i = 1; i < 100; i++) {
        // 約数の数を "count" とする。
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                // j が i の約数の場合 "count" を増やす。
                count++;
            }
        }
        // 約数の数が二つであれば、素数なので出力する。
        if (count === 2) {
            console.log(i);
        }
    }
}

prime();
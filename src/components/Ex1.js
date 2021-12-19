function Ex1() {
    let arr = [10, 1, 4, 30, 29, 18, 2, 3, 4, 5, 6];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return (
        <div>
            {
                arr.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
        </div>
    )
}

export default Ex1;

import React from 'react'
import { dataFakeImgTheater, returnRandomItem } from "../../util/settings/theaterData"
function FakeImgTheater({ nameTheater, imgStyled }) {
    console.log(dataFakeImgTheater)
    let imgTheater
    // ứng với mỗi nameTheater chỉ xuất 1 hình ảnh duy nhất
    // dataFakeImgTheater: [{nameTheater: "", img: "/img/cumRap/lotte-cinema-thu-duc-15383864347748.jpg"},]

    // tìm xem đã lưu hình tương ứng với nameTheater hay chưa
    const itemImgData = dataFakeImgTheater?.find(item => item.nameTheater === nameTheater)
    if (!itemImgData?.nameTheater) {
        let img = returnRandomItem() // lấy img từ mảng allCumRapImg
        dataFakeImgTheater.push({ nameTheater, img }) // push nameTheater = tên cụm rạp mình đã truyền vô và img từ mảng allCumRapImg vào dataFakeImgTheater
        imgTheater = img // nếu trong mảng dataFakeImgTheater không có nameTheater nào === với nameTheater mà ta truyền vào thì lấy 1 hình ngẫu hiên trong mảng allCumRapImg thông qua function returnRandomItem()
    } else { // ngược lại nếu có thì imgTheater === itemImgData.img có trong mảng === với nameTheater mà chúng ta đã truyền vào
        imgTheater = itemImgData.img
    }
    return (
        <div>
            <img className={imgStyled} src={imgTheater} alt="theater" />
        </div>
    )
}

export default FakeImgTheater

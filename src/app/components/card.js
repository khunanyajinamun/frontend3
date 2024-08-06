import Image from "next/image"

export default function card() {
    return(
        <div className="container-fluid">
            <div className="row">
                
              <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/หมูผัด.png" layout="responsive" className="card-img-top" width={100} height={100} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">หมูผัดซอสเปรี้ยวหวาน</h5>
                 <p className="card-text">หวานกลมกล่อม</p>
                 <a href="#" className="btn btn-primary">100.-</a>
                </div>
              </div>
            </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/ติ่มซำ.png" layout="responsive" className="card-img-top" width={100} height={100} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">ติ่มซำ</h5>
                 <p className="card-text">นุ่ม ละมุน</p>
                 <a href="#" className="btn btn-primary">100.-</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/หม้อไฟ.png" layout="responsive" className="card-img-top" width={100} height={100} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">หม้อไฟ</h5>
                 <p className="card-text">หอม เข้มข้น อร่อย</p>
                 <a href="#" className="btn btn-primary">100.-</a>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}

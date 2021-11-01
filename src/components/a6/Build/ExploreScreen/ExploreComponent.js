import React from "react";
import PostSummaryList from "../PostSummaryList/";
import {Link} from "react-router-dom";
const ExploreComponent = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-10">
                    <div className="wd-input-group">
          <span className="wd-icon-inside">
            <i className="fa fa-search wd-icon-color-lightgray"
               aria-hidden="true"></i>
          </span>
                        <input type="text" placeholder="Search Twitter"
                               className="mb-2 wd-input-field"/>
                    </div>
                </div>

                <div className="col-2"><Link to="#"><i
                    className="fa fa-cog fa-2x"></i></Link></div>
            </div>
            <ul className="nav nav-tabs mt-2">
                <li className="nav nav-item">
                    <Link to={"#"} className="nav-link ">For you</Link>
                </li>
                <li className="nav nav-item">
                    <Link to="#" className="nav-link">Trending</Link>
                </li>
                <li className="nav nav-item">
                    <Link to="#" className="nav-link">News</Link>
                </li>
                <li className="nav nav-item">
                    <Link to="#" className="nav-link">Sports</Link>
                </li>
                <li className="nav nav-item">
                    <Link to="#" className="nav-link">Entertainment</Link>
                </li>
            </ul>
            <div className="list-group">
                <div className="list-group-item">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGRgYGBgZGBgaGBgYGBkYGBkaGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQkJCE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEMQAAIBAgQCBgcGBQMBCQAAAAECAAMRBBIhMUFRBSJhcYGREzJSobHB0QZCYnKS8BQkgqLhFbLxIwczNENTc8LS4v/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACERAQEAAgICAgMBAAAAAAAAAAABAhESITFRQWEDE3HB/9oADAMBAAIRAxEAPwD0K8dTERGAnqcDkXgmWEvHtJK7iQKS0yQD6aRlQYSTCR8sREtoNlgyksAc5BjHaAKSLCGtIFYpBRLdJCBIU6cJVfhM27UAqbyBEJIMIpC0fLKvSGPSimd+4AWuTyF5PAYxKqLUQ3Vh4g8QeREUMRBvCsYJzJAvAtDNAvNQUBzBgybCQE0EjTg2STZ4zGSJCBHZ7yJEaxkjlZErJg84st9IIBrQb6Q7Ur9wkGURQSgmE9DaES0lmgFfJ2RQt4pJ2ceIxXnFs4EVoip5RAyRWg2SGEdlhvRVyLSF5YywTrGUBtIWko4EURWN6OOTJE6SRqawbDWGgnOsIkCJSx+NSnlzXJdsqqouxPEgcgNTCdI49KKF3Og0A4seCr2zkehq74nFNVfZEZ7DZBcKoH6vHWb11aN96Uftbjy9XJsEuAO3jI/Y/pb0TtTYnI2vOx5gCZfStW7sfxE/GAwB66nt17uMdLb1TCYpKiB0N1PgQRurDgRyknE4To7pR8NWYG5Qt114m+ucD2tfHUd3d06iuodCCrC4I4iWtLaLLK7iWWEE6SiqnUgryxUSBZJuMh3k01g7S9QpgCV6UDSiTLiYXTWOjchJu1uM521qRWr0xK7nlDu0EbR2VZgd4Eyy7wLTUrIYMWaPaRaINeKR0iknf+iN7cZZpYO2rES2ABraDd55Lla7TGRJstrGCTKDoJG+sIFmSeVqyCHL2vKtWsCZrGUUNQZFxLSAm1pWffWMvYsBZZHLDZYss3tkIrEBCESDCSDZo1pLLGYchfsinnv2vxZfEFAerTAUDhmOrHv2H9M1fstgymGxDm3XCW01C66E37m8Y1P7JM5Z61WzMSxFMX1Y3vmbtPKbSYcrhHuRZmAUBSoCIPRgbn2D7prLKWTGCTzXl+Pp9Y98Fgkue62sv4+kLM19QRbu1v8AKVsMllLcLgHzH1nSxnYnSlyyPrqoDWGtwdD3ageInSfYzFnM9JibEZ1B4EaMB33B8DMnC0s7qlwA5CEkZsoZ0sRqNQbHwm9S+zdShVSpTcOFYZgeo+U6NbgdCeIhNSWU3e9ukIg3WWGg2WYKq6SBSWikIqabR5aWlBaVoVBCusZZb2tCFgo0lWo8k0gyQkITNBsbwrWECTNaCLCBZhI1qpBgDUBm5izaPeRYiVnqW4wD4mXFna/aKZP8UecU1xq3HtJMCY7PIsbT58j0nVZIiDWrJM4lpBVRK/oryy0b0d5qXQsPSsBaV8QhGssinaBqKW0lPKvhTvJB4dcKdzpHxKqBpNcozpXuDHKwV4QPHQIiQKwqayTpaGzpSZIDF/8Agl/M/vcy+QJTxtK+DUdrHzM1vx/R7eXdIr1W/MPnIYdf+gTbZz7wv0lrpIXQk75wOAFgp5d8Bhx/Lv8AnA/tE7X/AFiC9FP/ANSn+dP96z0cjWeZdHtaonYyH+9Z6gL3hl0cQ2iVYYrxkGmNnRWtIs0e8ExlIQ2kXaSaCdowIF4J6hJ0jPUHOVWxAHGbmLNozKYDEVrCw84N8V2ypWrXmpizcgq9UneASpGZ5DNOumNk5gmkmeDdiY6G0bxSMUVt7SXEn6USoHiLT52nq5DMY6a6QIeTVtYWLa2tPSORICpzEkrTHbadpEACO0CzwSTmVMSvKHZ4JjN49CqgUyWSFiE1tnSaAAaQbteSETLAhKsHjbDCoDyPxltF1HfK/SNRf4ZSNje3vMt9xa6eUdLqMltR1zfkTa3PkPfKODVVouig6Mh56WI89JqdMIchNj6/McV5X75n0D1G6p3XW/fPRjJe3O9dI4ZrOvev+4T1QvrPKQ+t+z5z0xzrNZTbONWXqgCAavAMTA1NJiYxq5LXpLx7SpTOu8v010lZpTsFxKFZ5cxLzKxDTeM2zldBVX7YA3MkReRbTjOsjntCpaVnaEe5gWmpGdoNBmFIjZBFAGRMKyyBEUHaKStFJPWrRwJYwdK5uRoJYfKARbefOuerp6pj1tRk0e0IqJ298G1MgXJhuVasT9NHGJla8QMeMXIWpiDANVJhGYHeL0oGlvHjKTXwt/au1UyJrGFaoOA1gG5zcn0KMtcW1hAQdpRaRDEbS4rk0laFRpn08TbeHFccDMXGmZRcYTPxdhg0PL/O3heXUfNtuNZXxB/lkH72M5+G3mHSp6lut643BH3dJn0iPRsNb5ll7pZz2+sOHHKBKFH1T3z14+HG+QuPh856Xa4E81I1npdDVV/KvwEbRDrSkaiC0I7coJG11mO2g1oy0hssg2vdHYQt2Z0pYiZ9WamL0FpmtT11nTCueSq7Xg2SXqllGg8ZTM6yudgLiCZZctBMsdjSoyyBEsMINhNIEiQIhiJErJA2ihMsUk9mRgBa8GwvxlR6hjoxvefM4/L2bFuAbGNiHvoI6UixJOg5ydPKt+fMx6i7qqKTeyfKI0W5GExFc30MES1rxmVZuMQJiSmW2EPRpDjLa2Gm0rlrwpiBUwqhdBrbnxmeaR5Hymqe6RKQxzsauMqlh8LcnOCLDaAxNDKdJpkWF7yrWIa8cc7sXGaZpEt4bB5rEkW/ekdcITbUDmOUvUAFW3Kayz66GOPskVUU8BqSTyHyEp4hv5ameQv/AG3kensTkoOeYy/q0PuJjVDfCpccG004Azl9t/TzDpE76j1vnA4fa1x6371vLXSN7nbcQGEUkeI4z1zw4XyFVSxOmwB9156BgXzUkbmin3C84DFqBmsLaHbuAnadA1L0ivsOwHc3XG35iPCFu4ZF5jIAyTSNoJYQaRZY9JTxk3aZtbUsepteZbPbvmhimubyiyTrj4csvKu5J31kMssFJEpOm2dKzSMsMsGVjsaAZINkln0cXoZclpUKCMKctmkIxAEOR4q3oIobMIobyOo9DD3NzD0LHibwFGneWAgAvrPHlZ4d5B3Y2lB3N9JCpihwkVx1ha2vOZmNNpnptvYyaOx0IkRiieyHp1I9haw62EVR7Sua2ukKQGGpmbPmtShtibm3HlxsN/iJNK2ms5OvghXxz1M9hhURFGUMC7qXqBgdCMrUT3ib61CFAJ2AB7dNZaQpzPtGdcvbIUalj8pGo/OIO9S20jSr9sBVqQAvNSdDal9sOkAtNE4u7HS2mRd9/wAQm1k/lFvfZz725TgOmq/pK5IN1XqLbkL3PibnutO8w9S+D7mqD+9vdLPHjIsbu15x0mnWOnHj/wAwOFQWOn3hyljpUgMdbwWF1G5Go+c7fDn8g4ketvsdz3d86L7NYgio9M8FBGt721004Z5z2KHVbXW3Zz7IajWZMTnHAA776AEeIl9H7d3aFRYBKgYBhqCAQew7Q9OZtMNUrhTYkC9rcySTpbykHeUA+euzewpReV2YZm7+rbwPOXTCKq1RbwDIRLxWDZBNzIXFSMgwlxkg2Sa5M8VQrIkSyacNh8CWIuLLxMbnIuNVMPSzEi9rC8rvcE9k1auHCvddNZXxjLa1tZiZdnj0y2aOlO4JJhWSMBN3L0zMfatkPKKXcvZFLmeLsF6STgy275Gp0kh6ucDs4zmizHYZR/d58PDzgjUA0Gp5DYfmP7M8ju6N8VSAuXHy8TGo4yla4ca7aH5ic8iXN2N7a8Qo8PmYQP7P6jt/SDv3nTvmtjTo1xtO9i6/OO2MTfOAB27Cc6Mqi5O/iSfmY2bNuQBwW/vPM/vtmeS06RMdTt649/0i/wBTpjRnFrX47c9pzj1Qugtm7Tovf9Jm9Nvlw1Uq3XZSoN9Sz9UfGWzpb+znSpylmVbYio9csb3C1W6g7AqBPKdgSjKHQgqwDKwOhUi4I7CJ570lZKLqhFkwyKpGxApAAjsmj/2edKZ8N6FjdqJCj8j9ZPLrL/SJfJ+HVPVA4StVrXlkheUEUQ8JqMqitfgYHpPEejos5NmPVThqePgLnwE01sNhOQ+1fSOer6MEAILH85sW8tB4GON3Wb4YwYZhoPD8rT0TDN/K2Ht1b9+dp5qlT/qKL75tvytrO/wDn+Ff/wB6r/vMvy3ZwmnGdMPqxPO37MDg2uL9sL0oeuRl4mAwp02E3jemb5QxexiqOM4vpdFNztx7YLFsbG4/dxJueuLewn/zlje1Z06n7OYoFChIJXVfysdvA/ETYr4jKpbkCZxPRuM9HVR76KesLH1TobfHwE6npTFKAALXY6W12t4WuRLLyofADqX9o/DT43lnPbeV10AHIWjhCeECtKbi42kSssYewQA7yLVbacR5TPI6VwhO0DUJ4Q1Z9dD9I+IqjYR5DStSR73USdWswHKQOIy8YGpibx8oJ3Y84463rb8TBM8gzmaAlZxbKNoEPB5oXDpdteEvEXksxihWyjjGhtMShiHY6sbDf6QpYShTq2AA46mOcT2TnG6uVsVdcuoHHXeQpYsjhfvP+Jns45ya1BxNpjZ0t1sWzm54CwHIf5k6eMZdpn+lXnJelHMS2tLi1Te51JNyb8ZnfaXGN6PINPvHuWwHjcj3w4rDmJjdKvnbKNQSq+AGvvf+2Fy6MjqOmRloVF9lFQf0gKPhMP7I480cUhv1XtTb+q2U+DW8zNj7RVQaNaxBuwt+sTkcO9nDEEZXVgfytcH3St1TPD2Zq0j6QwB6To2Y5tvVGYXOtgTp4wNTpmiHRA2hBZmBFhY2t6u9yOPGdduehsViWRHcC5VWYDnlBNvdOAfEksSxJJOpynUnc987nH9IUmp1VDfccLrv1T2c5xdk7b+MYD4epdrcSRwO1nnb9GVL4ZyDtVqf5uDOBRwKq6m1tfDN9TOn6Px+XDVsut3qFdNNQANbW43mcu+mp0yMeesbtr4fSVsM4A3g8TUZVCm/IXve3CEw1QbNcjjl315Xmp10zQcU+9j+7wqtqtvYTl+Pn3ypX6t14C9udr6X7bWlzB0XdlCKTamGPCyjc++a3JVYNmYjc/2zU6OVmKXOii2u9lJt8R5TG9Mv4vfNLo3pFEBzFr8NGOnfLLKCSuiQGGVrAiYf+uUvaP6W+kY9PUubfpb6TFajZ9JbjI1K95jHpylzPk30kW6Yp8z+k/SPQ7azVuyCNaZX+s0+JPkYM9MUzs0dxdtUvfhIrKmHqu4zIjsL2uqki9gbad8VdaiqzeicWBOqNbQX17I9LtcZgBfjK3pe6DSm7KGCOQQCDkYjXttGfDPp1H1/A/u0lNDtJ3ubxs/H4QVTD1B9x/0P9IsfhXooHqAKCbXDZ9bXt1bmXKe1qiekHbHmK3TFIb1AP1fSKXLH2dX0yUrAi4Kkdlj85MdbiBbs/fOZC9Koq5QTbXhrqSdb98H/AKmv4/cPn3Tzc/p1mLoFoA65t+z/ADIsEBtn17h3W33mIvTlrAKdO7wkX6YJB0Ivpe/CXKelprnFIGZcw0tuRY8NOe0Qxyi5LqAANLi9zr8tpzT1VNtD59mkEzjttDktOsXHoRo68bajcC9plviQSCrWZdRzzXzX8z7pjq4B2hUxSjZB+oyrUb/SPSjOuQkgG2YGxu3hw+koviAttCddfdKbY69+p5kn5QRxX4F8ucu109Cw/SaOiuxyhr9XXhvc7mRqdKU9g1urpoeJ4C3ZOFp4trZQi8/vcPGDFR9bKdb8GjzrOnenpNCp699CCdBupJO3YZSGLQ7Nc67FeBsfKcrSxNQLYIfJuH/MQxNXYJ/Y3Hfjx08o86uDpvSpnUvfKL31UEjKTa4NuPOHw3TKLTyKG9djaxOhAAFuO05M16x+4f0n4yaYnELeyd+jEa9xsd4XP5XFvYnEA+sjg5QQCpF1J0OvD6SymOZaIPomKgnrFlCC5P3d+zec2uKxH/p+ORzxJ598ZqmIa49GdeSta/cTaFzPFrvVd2JyWFlOh0A53G97Td+x6VmLupTIqZL6FgS9M5bdqhu7ScYlLE+wRb8K/OX8BiMfRBSm2RSdVy0iCeZBHZLn/FxaoaIvMHLi+f8AskTSxXtjzT6TX7MRwrdNSDz7zHXD4r2181/+sT4XEn/zE7eso08BK/lxXGtgvHLzI/hMT7a6fiH0jfwuJ41F/UPgBD9uJ41qt6trk24nU+cGlMgg32mcuGxGvXHn/wDnWTpUawN/SKeYNj4S/ZiONar4tk0V3AAzHKzAbgXNuOoiXFufvuR+ZiD2b6zMfPc5lRgRlIzhSRcHnpsIbDqPUekco9mpqPLeF/J6XH21aeKfISGewYKSH0GWxOh1+8mokUx7n77nTN6x23HHjY+cDTNAgl0cEk6jUb3Gmb5Q1Klh9LFr2tqCBtbcuNI81xQfHVAf+8fffO2gvvvyuJvdN9OjE4cYdBU9KuQBiBlZlUoNcxNiRf1eUwaXRwKOo9YtdT1ToQA17Ekfe90JS6MBck9VbC2htoE0IH9Xl3Q5GyOWrYGqWOa1763cj3Ximz/oD+0vv+kUzurTPToxN7HxMMvRieyT4iKKcrlWoIOj6Y+4o0vxMdcHT4Kvkb+B3jRTO6URh6QOqXvx3PmTeSNGjb1fdfwiijKhPQ0xslrb6D43jCjTa4u3aIookVMOi7XtzOuvdeTUIfvH9Cn4xRQSdJF538CDDZAN277D/mKKCSULubkdunwidU7D+qPFMkwYcAPNvOSZ9dGAHDQ9m8aKG1tEk8GbzI920cU2/wAk3iijsbD/AIYkb28d/dI+gbh8efl8oopbqOcO17Xv3EiEOFFuR5Ek3794opcqghhNb2A02zN9DJ0qAUEFtz+IkHbfSKKW6kPRDcFSO1SOH4SI9Qg3ITl94+e/utHim90KwpC9146agH42jVFtp1T22t8NeEaKG18I01I2A15sx90d7k8B3D9/CKKaSLra97WG1gfrIg6cDw2P1jxQiqQbs+Xl1oqdVuDHcxRSA/8AE1Pab9UUUUU//9k="
                    alt="..."
                         className="wd-full-width-height"/>
                    <h5 className="card-title">SpaceX's StarShip</h5>
                </div>
                <PostSummaryList/>
            </div>
        </>
    )
};
export default ExploreComponent;
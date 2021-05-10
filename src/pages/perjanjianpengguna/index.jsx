import React from "react";
import FooterHomePage from "../../components/footerComponents/footerHomePage/FooterHomePage";
import HeaderAlternate from "../../components/headerComponents/headerHomePage/HeaderAlternate";

export default function PerjanjianPengguna() {
  return (
    <div>
        <HeaderAlternate />
        <div className="perjanjianpengguna">
            <h4
            className="text-center font-40 text-gold font-weight-bold"
            style={{ paddingTop: "120px" }}
            >
            Perjanjian Pengguna
            </h4>
        </div>
      

        <div className="bg-homepage pt-4 pb-5">
            <div className="container">
                <div className="">
                    <div className="pt-4 pb-1">
                        <h5 className="text-gold">
                            PENOLAKAN, PENUNDAAN, DAN PEMBATALAN TRANSAKSI
                        </h5>
                    </div>
                </div>

                {/* Section 1 */}
                <div className="mt-3">
                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2">
                            Cryptoindex.com berhak untuk melakukan penundaan dan/atau penolakan transaksi apabila CRYPTOINDEX mengetahui atau berdasarkan pertimbangan, menduga bahwa kegiatan penipuan dan/atau aksi kejahatan telah dan/atau akan dilakukan
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Member/Verified Member setuju dan mengakui bahwa sepanjang diperbolehkan oleh ketentuan Hukum yang berlaku, CRYPTOINDEX wajib menolak untuk memproses segala transaksi.
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Member/Verified Member mengakui bahwa CRYPTOINDEX tunduk kepada Undang-Undang tentang kejahatan keuangan, termasuk namun tidak terbatas pada, Undang-Undang Pemberantasan Tindak Pidana Korupsi dan Undang-Undang Tindak Pidana Pencucian Uang yang berlaku di Indonesia dan secara internasional, segala peraturan perundang-undangan yang berlaku di Indonesia dan kebijakan internal CRYPTOINDEX. Untuk tujuan tersebut, Member/Verified Member dengan ini setuju untuk memberikan segala informasi yang diminta oleh CRYPTOINDEX guna memenuhi peraturan perundang-undangan tersebut termasuk namun tidak terbatas pada nama, alamat, usia, jenis kelamin, keterangan identitas pribadi, pendapatan, pekerjaan, harta kekayaan, hutang, sumber kekayaan, tujuan pembukaan Akun, tujuan investasi, segala rencana keuangan atau informasi keuangan terkait lainnya dari Member/Verified Member. Jika diperlukan oleh CRYPTOINDEX, Member/Verified Member juga setuju untuk menyediakan data terbaru tentang informasi tersebut kepada CRYPTOINDEX.
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            CRYPTOINDEX tidak akan bertanggung jawab untuk setiap kerugian (baik secara langsung dan termasuk namun tidak terbatas pada kehilangan keuntungan atau bunga) atau kerugian yang diderita oleh pihak manapun yang timbul dari segala penundaan atau kelalaian dari CRYPTOINDEX untuk memproses segala perintah pembayaran tersebut atau informasi atau komunikasi lainnya atau untuk melaksanakan segala kewajiban lainnya, yang disebabkan secara keseluruhan atau sebagian oleh segala tindakan yang diambil berdasarkan angka 4 ketentuan Penolakan dan Penundaan Transaksi ini.
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            CRYPTOINDEX berkewajiban untuk mematuhi hukum, peraturan dan permintaan lembaga masyarakat dan pemerintah dalam yurisdiksi yang berbeda-beda yang berkaitan dengan pencegahan atas pembiayaan untuk, antara lain, teroris dan pihak yang terkena sanksi. Hal ini dapat menyebabkan CRYPTOINDEX untuk melakukan pencegatan dan menyelidiki segala perintah pembayaran dan informasi atau komunikasi lainnya yang dikirimkan kepada atau oleh Member/Verified Member, atau atas nama Member/Verified Member melalui sistem CRYPTOINDEX. Proses ini juga dapat melibatkan CRYPTOINDEX untuk melakukan penyelidikan lebih lanjut untuk menentukan apakah nama yang muncul dalam segala transaksi yang dilakukan atau akan dilakukan oleh Member/Verified Member melalui Akunnya adalah nama teroris.
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            CRYPTOINDEX berwenang untuk melakukan pemantauan atas Akun Member/Verified Member dalam rangka pencegahan kejahatan keuangan.
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Member/Verified Member mengerti, memahami dan setuju bahwa terhadap setiap transaksi yang telah dilakukan melalui CRYPTOINDEX bersifat final dan tidak dapat dilakukan pembatalan oleh Member/Verified Member.
                        </li>
                    </ol>
                </div>
                {/* End of Section 1 */}

                {/* Section 2 */}
                <div className="">
                    <div className="pt-4 pb-1">
                        <h5 className="text-gold">
                            TRANSAKSI MENCURIGAKAN
                        </h5>
                    </div>
                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Dalam hal terjadinya transaksi mencurigakan yang dilakukan melalui layanan CRYPTOINDEX, maka CRYPTOINDEX berhak untuk menghentikan/menonaktifkan Akun CRYPTOINDEX  pada Member/Verified Member dan memblokir dana transaksi serta melakukan penundaan transaksi kepada Member/Verified Member, sampai dengan adanya pemberitahuan dari CRYPTOINDEX.
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Dalam hal terjadi transaksi mencurigakan dan/atau  transaksi yang melebihi batasan volume transaksi yang ditetapkan oleh CRYPTOINDEX terhadap Member/Verified Member karena alasan apapun juga, maka CRYPTOINDEX berhak sewaktu-waktu menunda pengkreditan dana ke Akun CRYPTOINDEX Member/Verified Member dan/atau melakukan pemblokiran Akun Member/Verified Member sampai proses investigasi selesai dilakukan dalam jangka waktu yang ditentukan oleh CRYPTOINDEX.
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Apabila terbukti bahwa transaksi tersebut pada angka 1 dan 2 tersebut diatas mengenai transaksi mencurigakan adalah transaksi yang melanggar SK dan/atau peraturan perundang-undangan yang berlaku, maka Member/Verified Member dengan ini Memberi kuasa kepada CRYPTOINDEX untuk mendebet Aset Kripto pada Dompet Digital CRYPTOINDEX untuk mengganti kerugian CRYPTOINDEX yang timbul akibat transaksi tersebut, tanpa mengurangi hak untuk melakukan tuntutan ganti rugi atas seluruh kerugian yang timbul akibat transaksi tersebut dan Member/Verified Member dengan ini setuju bahwa CRYPTOINDEX tidak wajib melakukan pengembalian atas dana yang ditunda pengkreditannya oleh CRYPTOINDEX atau dana yang diblokir sebagaimana dimaksud pada angka 2 ketentuan mengenai transaksi mencurigakan ini.
                        </li>
                    </ol>
                </div>
                {/* End of Section 2 */}

                {/* Section 3 */}
                <div className="">
                    <div className="pt-4 pb-1">
                        <h5 className="text-gold">
                            BATAS PENARIKAN
                        </h5>
                    </div>
                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Member/Verified Member dengan ini menyatakan setuju untuk mematuhi batas penarikan baik terhadap Aset Kripto maupun Rupiah yang berlaku terhadap Akun Member/Verified Member, dan CRYPTOINDEX yang dalam hal ini menerapkan prinsip Anti Money Laundering (AML) sesuai dengan regulasi Pemerintah Republik Indonesia diberi kuasa serta hak untuk tidak melakukan proses terhadap transaksi yang telah melebihi batas penarikan harian  yaitu sebesar yang ditentukan oleh CRYPTOINDEX.
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Batas penarikan direset ulang atau kembali pada angka 0 (nol) setiap pukul 00.00 Waktu Indonesia Barat (WIB).
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Penambahan batas penarikan dapat dilakukan dengan mengajukan permohonan ,dimana Member/Verified Member wajib melakukan pengisian, pencantuman dan pencetakan terhadap semua  informasi yang terdapat dalam formulir diatas materai Rp. 10.000,- (enam ribu rupiah) dan Member/Verified Member wajib untuk mengirimkan soft copyterhadap dokumen tersebut baik melalui foto atau hasil scan, serta memastikan tulisan dapat dibaca dengan jelas, tidak terdapat crop, sensor atau rekayasa digital dalam bentuk apapun; ke support@cryptoindex.id dengan subjek <span className="font-weight-bold">“Permohonan Kenaikan Limit Penarikan”</span>.
                        </li>
                        <li className="font-16 text-white text-justify mb-2 mt-2">
                            Proses persetujuan atau penolakan kenaikan batas penarikan limit harian mutlak merupakan kewenangan CRYPTOINDEX dengan pertimbangan dari tim audit dan hukum sesuai permintaan, sejarah transaksi, sumber dana, dan tujuan penggunaan transaksi serta tidak dapat diintervensi. Member/Verified Member yang ditolak kenaikan limitnya baru dapat mengajukan permohonan kembali dengan jangka waktu 1×24 (satu kali dua puluh empat) jam.
                        </li>
                    </ol>
                </div>
                {/* End of Section 3 */}

                {/* Section 4 */}
                <div className="">
                    <div className="pt-4 pb-3">
                        <h5 className="text-gold">PROGRAM CRYPTOINDEX </h5>
                    </div>
                    <div>
                        <p className="font-16 text-white text-justify mb-2">
                            Program CRYPTOINDEX adalah program resmi yang diberikan CRYPTOINDEX dalam layanan, program dapat berubah sewaktu-waktu sesuai dengan kebijakan CRYPTOINDEX. Program ini antara lain :
                        </p>
                    </div>
                    <ul className="text-white">
                        <li>
                            <span className="font-weight-bold">CRYPTOINDEX PRIORITAS </span>adalah program yang diberikan Cryptoindex, dengan memberikan keuntungan lebih kepada Verified Member.
                        </li>
                        <li>
                            <span className="font-weight-bold">COMMUNITY COIN VOTING </span>merupakan program CRYPTOINDEX untuk menentukan coin baru yang akan terdaftar pada CRYPTOINDEX. Pada program ini Verified Member CRYPTOINDEX bisa berpartisipasi dengan memilih coin dan memberikan vote kepada coin yang didukung.
                        </li>
                        <li>
                            <span className="font-weight-bold">PROGRAM AFILIASI </span>adalah program yang diberikan kepada Verified Member yang berhasil mempromosikan CRYPTOINDEX kepada Member lainnya, dengan manfaat afiliasi yang ditentukan oleh CRYPTOINDEX dan Keuntungan atas program afiliasi sudah termasuk pajak, dan terhadap Verified Member yang menginginkan bukti pembayaran pajak dapat menghubungi support@cryptoindex.id.
                        </li>
                        <li>
                            <span className="font-weight-bold">PENGGUNAAN MEREK &amp; LOGO CRYPTOINDEX UNTUK PROGRAM AFILIASI </span>
                                <ol>
                                    <li>Penggunaan Merek dan Logo CRYPTOINDEX untuk kepentingan apapun wajib mendapatkan persetujuan dari CRYPTOINDEX secara tertulis sebelumnya.</li>
                                    <li>Setiap verified member yang mengikuti program afiliasi wajib mengikuti ketentuan dalam guidelines penggunaan merek dan logo CRYPTOINDEX.</li>
                                    <li>Penggunaan Merek dan Logo CRYPTOINDEX hanya diperbolehkan untuk hal-hal tertentu yang sesuai kegiatan transaksi yang melibatkan CRYPTOINDEX serta tidak melanggar hukum yang berlaku dan norma yang ada, dan dinyatakan sebagai hasil yang bukan merupakan penggunaan karya pihak lain tanpa hak, serta plagiarisme dan dapat dipublikasikan. Pelanggaran atas pernyataan dan jaminan ini akan mengakibatkan setiap verified member yang mengikuti program afiliasi bertanggung jawab secara sendiri atas seluruh biaya yang timbul atas kerugian termasuk biaya penyelesaian proses hukum dan biaya jasa hukum; termasuk namun tidak terbatas pada perbuatan pencemaran nama baik, perbuatan tidak menyenangkan, duplikasi. Verified member yang mengikuti program afiliasi akan membebaskan CRYPTOINDEX dari segala gugatan, klaim, dan laporan yang ada, serta membayar kepada CRYPTOINDEX atas seluruh kerugian yang diderita.</li>
                                    <li>verified member yang mengikuti program afiliasi dilarang mengunggah konten dengan Merek dan logo CRYPTOINDEX pada website, blog, dan media sosial yang mengandung unsur SARA, pornografi, politik dan/atau unsur lainnya yang melanggar ketentuan perundang-undangan yang berlaku.</li>
                                    <li>CRYPTOINDEX melarang penggunaan Merek dan logo CRYPTOINDEX untuk melakukan dukungan dalam bentuk apa pun juga terhadap tindakan kriminal dalam bentuk apa pun, termasuk namun tidak terbatas pada Tindak Pidana korupsi, penyuapan, narkotika, psikotropika, penyelundupan tenaga kerja, penyelundupan manusia, bidang perbankan, bidang pasar modal, bidang perasuransian, kepabeanan, cukai, perdagangan manusia, perdagangan senjata gelap, terorisme, penculikan, pencurian, penggelapan, penipuan, pemalsuan, perjudian, prostitusi, bidang perpajakan, dan terorisme;</li>
                                    <li>CRYPTOINDEX berhak memberikan teguran dan sanksi serta upaya hukum lainnya kepada siapa pun yang menggunakan Merek dan logo CRYPTOINDEX tanpa seizin CRYPTOINDEX dan atau melakukan pelanggaran lain sehubungan dengan penggunaan logo CRYPTOINDEX yang mengakibatkan adanya kerugian pada CRYPTOINDEX.</li>
                                </ol>
                        </li>
                    </ul>
                </div>
                {/* done */}
                {/* End of Section 4 */}

                {/* Section 5 */}
                <div className="">
                    <div className="pt-4 pb-3">
                        <h5 className="text-gold">
                        KERJASAMA LAYANAN
                        </h5>
                    </div>
                    <div>
                        <p className="font-16 text-white text-justify mb-2">
                            Pengaduan Member/Verified Member disini terkait dengan pemberitahuan pelanggaran data dan/atau apabila terjadi permasalahan berkenaan dengan kepemilikan Aset Kripto yang dimiliki oleh Member/Verified Member. Apabila terjadi permasalahan tersebut, berikut mekanisme yang harus dilakukan oleh Member/Verified Member antara lain:
                        </p>
                    </div>
                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2">
                            Berkenaan dengan pengaduan Member/Verified Member, Member/Verified Member memiliki hak untuk melakukan pemberitahuan kepada CRYPTOINDEX dengan kondisi sebagai berikut:
                            <ol>
                                <li>Apabila Member/Verified Member menerima spam, segala bentuk iklan liar dan/atau surat elektronik yang mengatasnamakan nama selain CRYPTOINDEX yang meminta data pribadi dan/atau mengganggu kenyamanan para Member/Verified Member;</li>
                                <li>Apabila terdapat praktik tindak kejahatan pencurian dan penipuan Aset Kripto yang mengakibatkan hilangnya Aset Kripto di Akun Member/Verified Member;</li>
                                <li>Apabila terdapat dugaan aktivitas pelanggaran data Member/Verified Member oleh pihak lain yang bukan dijelaskan pada poin a dan b tersebut diatas.</li>
                            </ol>
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Member/Verified Member dapat mengajukan pengaduan dengan mengisi formulir pengaduan yang disediakan oleh CRYPTOINDEX. Form pengaduan dapat langsung diunduh di https://Cryptoindex.com yang kami sediakan atau dapat diunduh disini;
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Berkenaan dengan praktek penyalahgunaan data Member/Verified Member oleh pihak lain yang mengakibatkan adanya spam atau praktek skimming, maka Member/Verified Member dimohon dapat melakukan pengaduan dengan mekanisme sebagai berikut:
                            <ol>
                                <li>Sebagaimana yang diisyaratkan pada poin 2, Member/Verified Member dapat melakukan pengaduan melalui pengisian form pengaduan yang telah kami sediakan dan dapat mengirimkan ke email support@cryptoindex.id;</li>
                                <li>Laporan tersebut akan segera kami lakukan tindak lanjut dengan penanganan pengaduan dalam kurun waktu 3 x 24 jam;</li>
                                <li>Apabila dalam kurun waktu tersebut, Member/Verified Member tidak mendapatkan pelayanan dari pihak kami, maka Member/Verified Member dapat mengirimkan kembali form pengaduan tersebut ke email support@cryptoindex.id dan/atau melakukan kontak melalui kantor representative CRYPTOINDEX;</li>
                            </ol>
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Berkenaan dengan hilangnya Aset Kripto di Akun Member/Verified Member sebagai akibat adanya praktik tindak pidana kejahatan elektronik oleh pihak lain, maka Member/Verified Member dapat melakukan pengaduan dengan mekanisme sebagai berikut:
                            <ol>
                                <li>Sebagaimana yang diisyaratkan pada poin 2, Member/Verified Member dapat melakukan pengaduan melalui pengisian form pengaduan yang telah disediakan.</li>
                                <li>Laporan tersebut akan dilaksanakan penangan awal dimana akan dilakukan pembekuan Akun oleh pihak terlapor (pihak terduga) yang menampung atau mengambil Aset Kripto Member/Verified Member tersebut;</li>
                                <li>Admin akan meneruskan laporan pengaduan anda kepada tim legal untuk memproses penanganan selanjutnya. Penanganan selanjutnya berupa klarifikasi dengan pihak terlapor (pihak terduga);</li>
                                <li>Apabila tahap klarifikasi ini berhasil dimana pihak terlapor Memberikan respon maka akan dilakukan mediasi dengan pihak pelapor (dalam hal ini Member/Verified Member yang melapor);</li>
                                <li>Apabila mediasi tidak berhasil maka akan dilanjutkan melalui laporan ke kepolisian setempat dan kami akan mempersiapkan data yang diminta.</li>
                            </ol>
                        </li>
                    </ol>
                </div>
                {/* done */}
                {/* End of Section 5 */}

                {/* Section 3 */}
                <div className="">
                    <div className="pt-4 pb-3">
                        <h5 className="text-gold">
                            PERNYATAAN DAN JAMINAN
                        </h5>
                    </div>

                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2">
                            Semua layanan dalam Website tidak Memberikan jaminan ataupun garansi apapun dan CRYPTOINDEX tidak menjamin bahwa Website akan selalu dapat diakses setiap waktu.
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Member/Verified Member menyatakan dan menjamin akan menggunakan layanan CRYPTOINDEX dengan baik dan penuh tanggung jawab serta tidak melakukan tindakan yang berlawanan dengan hukum, undang-undang serta peraturan yang berlaku di wilayah Republik Indonesia.
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Member/Verified Member menyatakan dan menjamin tidak akan menggunakan layanan CRYPTOINDEX dalam penjualan barang dan/jasa yang berhubungan dengan:
                            <ol>
                                <li>
                                    <p className="mb-1">i)  Narkotika, bahan dan/atau zat kimia untuk penelitian; </p>
                                    <p className="mb-1">ii) Uang dan apapun yang sejenis dengan uang, termasuk derivative; </p>
                                    <p className="mb-1">iii) Barang dan/atau jasa yang melanggar Hak Kekayaan Intelektual;</p>
                                    <p className="mb-1">iv) Amunisi, senjata api, bahan peledak, senjata tajam sesuai dengan Ketentuan Hukum yang berlaku;</p>
                                    <p className="mb-1">v) Barang dan/atau jasa yang menunjukkan informasi pribadi dari Pihak Ketiga yang melanggar hukum yang</p>
                                </li>
                                <li>Dukungan terhadap skema Ponzi dan program</li>
                                <li>Barang dan/atau jasa yang berhubungan dengan pembelian lotre, lay-away</li>
                                <li>Jasa yang terkait dengan perbankan yang berada di luar wilayah Republik</li>
                                <li>Pembayaran kartu</li>
                                <li>Penyelesaian kredit dan/atau</li>
                                <li>Dukungan terhadap organisasi terlarang atau dilarang oleh pemerintah.</li>
                            </ol>
                        </li>
                        <li className="font-16 text-white text-justify mb-2">Member/Verified Member menyatakan dan menjamin untuk tidak menggunakan layanan terhadap perbuatan yang terlibat dalam praktek perjudian dan/atau kegiatan lain yang mengenakan biaya masuk dan menjanjikan hadiah, termasuk namun tidak terbatas pada permainan kasino, perjudian dalam olahraga, usaha yang memfasilitasi perjudian dan cara undian.</li>
                        <li className="font-16 text-white text-justify mb-2">Member/Verified Member menyatakan dan menjamin bahwa seluruh data, informasi dan dokumen yang diberikan Member/Verified Member kepada CRYPTOINDEX merupakan data, informasi dan dokumen yang sebenar-benarnya, sah, jujur, transparan, lengkap dan akurat. Member/Verified Member menyatakan bersedia dituntut secara pidana maupun apabila CRYPTOINDEX mengetahui atau memperoleh informasi dari pihak manapun bahwa data, informasi dan dokumen yang diberikan Member/Verified Member ternyata tidak benar/tidak sepenuhnya benar/palsu. Member bersedia untuk melakukan pembaharuan data/informasi (profile update) apabila sewaktu-waktu diminta oleh CRYPTOINDEX dan selanjutnya seluruh dokumen yang sudah diberikan menjadi sepenuhnya milik CRYPTOINDEX.</li>
                        <li className="font-16 text-white text-justify mb-2">CRYPTOINDEX telah Memberikan keterangan dan penjelasan yang cukup mengenai layanan CRYPTOINDEX yang akan dipergunakan Member/Verified Member sesuai dengan ketentuan pada SK dan Member/Verified Member telah mengerti dan memahami serta bersedia menanggung segala konsekuensi yang mungkin timbul sehubungan dengan penggunaan layanan CRYPTOINDEX termasuk manfaat, resiko dan biaya-biaya yang melekat layanan dan layanan.</li>
                        <li className="font-16 text-white text-justify mb-2">Member/Verified Member dengan ini menyetujui dan memberi kuasa kepada CRYPTOINDEX untuk menggunakan semua data, keterangan dan informasi yang diperoleh CRYPTOINDEX mengenai Member/Verified Member termasuk namun tidak terbatas pada penggunaan sarana komunikasi pribadi Member/Verified Member untuk segala keperluan lainnya sepanjang dimungkinkan dan diperkenankan oleh perundang-undangan yang berlaku, termasuk yang bertujuan untuk pemasaran produk-produk CRYPTOINDEX ataupun pihak lain, yang bekerjasama dengan CRYPTOINDEX. Untuk penggunaan data yang memerlukan persetujuan pihak lain, dengan ini Member/Verified Member menyatakan bahwa telah memperoleh persetujuan tertulis dari pihak ketiga manapun untuk penggunaan data, keterangan dan informasi tersebut, dan karena itu Member/Verified Member menjamin dan menyetujui bahwa CRYPTOINDEX tidak akan Memberikan ganti rugi dan/atau pertanggungjawaban dalam bentuk apapun kepada Member/Verified Member atau pihak manapun atas segala risiko, kerugian, tuntutan dan/atau tanggungjawab yang mungkin timbul dikemudian hari sehubungan dengan penggunaan data, keterangan dan informasi yang telah memperoleh persetujuan tertulis tersebut oleh CRYPTOINDEX.</li>
                        <li className="font-16 text-white text-justify mb-2">Member/Verified Member menyatakan dan menjamin bahwa transaksi yang dilakukan dengan menggunakan layanan CRYPTOINDEX adalah transaksi yang tidak melanggar ketentuan peraturan perundang-undangan yang berlaku dan ketentuan mengenai penerimaan pelaksanaan transaksi sebagaimana diatur dalam SKB. Dalam hal CRYPTOINDEX menemukan indikasi pelaksanaan transaksi yang tidak sesuai dengan ketentuan peraturan perundang-undangan yang berlaku dan atau ketentuan mengenai penerimaan pelaksanaan transaksi yang diatur dalam SKB, maka CRYPTOINDEX mempunyai hak penuh untuk menutup Akun Member/Verified Member dengan menonaktifkan layanan CRYPTOINDEX pada Member/Verified Member, dan Member/Verified Member dengan ini setuju bahwa CRYPTOINDEX dengan ini tidak akan Memberikan ganti rugi dan atau pertanggungjawaban dalam bentuk apapun kepada Member/Verified Member, atau pihak manapun atas segala klaim dan atau tuntutan yang timbul sehubungan dengan penonaktifan layanan CRYPTOINDEX pada Member/Verified Member.</li>
                        <li className="font-16 text-white text-justify mb-2">Member/Verified Member menyatakan dan menjamin bahwa resiko terhadap penggunaan layanan, produk dan promosi Pihak Ketiga dengan Member/Verified Member (apabila ada), ditanggung oleh Member/Verified Member, dan Member/Verified Member menyatakan bahwa CRYPTOINDEX tidak bertanggung jawab atas layanan dan kinerja layanan Pihak Ketiga.</li>
                        <li className="font-16 text-white text-justify mb-2">Member/Verified Member dengan ini bertanggung jawab sepenuhnya dan setuju bahwa CRYPTOINDEX tidak akan Memberikan ganti rugi dan atau pertanggungjawaban dalam bentuk apapun kepada Member/Verified Member atau pihak manapun atas segala kerugian dan atau klaim dan atau tuntutan yang timbul atau mungkin dialami oleh CRYPTOINDEX sebagai akibat dari kelalaian atau kegagalan Member/Verified Member dalam menjalankan transaksi.</li>
                        <li className="font-16 text-white text-justify mb-2">Member/Verified Member dengan ini Memberikan jaminan kepada CRYPTOINDEX bahwa Member/Verified Member beserta dengan seluruh karyawannya dan atau pihak lain yang bekerja sama dengan Member/Verified Member tidak akan memperbanyak dan atau membuat, Memberikan, menyewakan, menjual, memindahkan, mengalihkan, dan atau mengalih-fungsikan layanan CRYPTOINDEX baik sebagian atau seluruhnya kepada pihak lain dengan alasan apapun, termasuk namun tidak terbatas pada penyalahgunaan layanan cryptoindex.id untuk melakukan transaksi selain dari yang telah ditentukan dalam SKB dengan maksud apapun, termasuk namun tidak terbatas untuk kejahatan/penipuan/kecurangan. Apabila Member/Verified Member melanggar ketentuan tersebut, maka Member/Verified Member wajib bertanggung jawab atas segala kerugian, tuntutan dan atau gugatan yang timbul akibat dari pelanggaran tersebut dan dengan ini setuju bahwa CRYPTOINDEX tidak akan Memberikan ganti rugi dan atau pertanggungjawaban dalam bentuk apapun kepada Member/Verified Member atau pihak manapun atas segala klaim dan atau tuntutan dan atau gugatan yang timbul akibat pelanggaran tersebut</li>
                        <li className="font-16 text-white text-justify mb-2">
                            Sebagai wujud komitmen dan bentuk kepatuhan kami terhadap GDPR, maka bersama dengan Syarat dan Ketentuan Berlaku (SKB ) ini CRYPTOINDEX menjamin bahwa:
                            <ol>
                                <li>CRYPTOINDEX terus selalu berkomiten dan menjamin data personal Member/Verified Member kami dan akan menindaktegas apabila ada pihak lain telah menggunakan data informasi Member/Verified Member kami;</li>
                                <li>CRYPTOINDEX menjamin transfer lintas batas Aset Kripto;</li>
                                <li>CRYPTOINDEX selalu menerapkan protokoler dan mekanisme berupa permintaan ijin dan persetujuan atau notifikasi kepada Member/Verified Member untuk segala bentuk pemrosesan data di marketplace didalam melakukan deposit, penarikan dan/atau pembaharuan data.</li>
                            </ol>
                        </li>
                    </ol>
                </div>
                {/* done */}
                {/* End of Section 2 */}

                {/* Section 4 */}
                <div className="">
                    <div className="pt-4 pb-3">
                        <h5 className="text-gold">TANGGUNG JAWAB</h5>
                    </div>
                    <div>
                        <p className="font-16 text-white text-justify mb-2">
                            Member/Verified Member setuju untuk menanggung setiap risiko, kerugian atau akibat yang diderita Member/Verified Member yang disebabkan oleh, antara lain:
                        </p>
                    </div>
                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2">kerusakan, keterlambatan, kehilangan atau kesalahan pengiriman perintah dan komunikasi, secara elektronik yang disebabkan oleh Member/Verified Member;</li>
                        <li className="font-16 text-white text-justify mb-2">Laporan Akun CRYPTOINDEX atau pemberitahuan penggunaan layanan CRYPTOINDEX yang dikirim kepada Member/Verified Member diterima atau dibaca atau disalahgunakan oleh pihak yang tidak berwenang atas Akun CRYPTOINDEX,</li>
                        <li className="font-16 text-white text-justify mb-2">PasswordAkun diketahui oleh orang/pihak lain atas kesalahan Member/Verified Member,
                            <ul>
                                <li className="text-white">Member/Verified Member memahami dan setuju bahwa Member/Verified Member akan menggunakan Akun dan layanan CRYPTOINDEX untuk transaksi yang tidak bertentangan dengan ketentuan peraturan perundang – undangan dan/atau kebijakan internal CRYPTOINDEX yang berlaku dan/atau peraturan – peraturan lainnya yang berlaku secara nasional maupun internasional yang terkait dengan pelaksanaan transaksi tersebut baik secara langsung maupun tidak langsung, dan CRYPTOINDEX tidak akan Memberikan ganti rugi dan/atau pertanggungjawaban dalam bentuk apapun kepada Member/Verified Member atau pihak manapun atas segala klaim dan/atau tuntutan dan/atau kerugian yang timbul sehubungan dengan penggunaan layanan CRYPTOINDEX oleh Member/Verified Member untuk transaksi yang dikategorikan sebagai transaksi yang mencurigakan dan/atau transaksi yang dilarang oleh ketentuan peraturan perundang – undangan dan/atau kebijakan internal CRYPTOINDEX yang berlaku dan/atau peraturan – peraturan lainnya yang berlaku baik secara nasional maupun secara internasional yang terkait dengan kegiatan transaksi yang dilakukan oleh Member/Verified Member secara langsung maupun tidak langsung.</li>
                                <li className="text-white">Dalam melakukan transaksi menggunakan layanan CRYPTOINDEX, Member/Verified Member mengerti dan menyetujui bahwa terdapat sanksi – sanksi tertentu yang dikenakan oleh pemerintah, termasuk pemerintah Negara lain, dan/atau instansi berwenang lainnya terhadap beberapa negara, badan dan perorangan. Mengacu pada hal tersebut, CRYPTOINDEX berhak untuk tidak melaksanakan/memproses transaksi yang merupakan pelanggaran terhadap ketentuan sanksi tersebut, dan instansi berwenang dapat mensyaratkan pengungkapan informasi terkait. CRYPTOINDEX tidak bertanggung jawab apabila Cryptoindex.com atau pihak lain gagal atau menunda pelaksanaan transaksi, atau pengungkapan informasi sebagai akibat pelanggaran langsung maupun tidak langsung atas ketentuan sanksi tersebut.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                {/* done */}
                {/* End of Section 4 */}

                {/* Section 4 */}
                <div className="">
                    <div className="pt-4 pb-3">
                        <h5 className="text-gold">
                            RISIKO
                        </h5>
                    </div>
                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2">
                            Perdagangan Aset Kripto merupakan aktifitas berisiko tinggi. Harga Aset Kripto fluktuatif, di mana harga dapat berubah secara signifikan dari waktu ke waktu. Sehubungan dengan fluktuasi harga, nilai Aset Kripto dapat bertambah maupun berkurang secara signifikan sewaktu-waktu. Semua Aset Kripto atau tidak, berpotensi untuk mengalami perubahan nilai secara drastis atau bahkan menjadi tidak berarti. Terdapat risiko kehilangan yang tinggi sebagai dampak dari membeli, menjual, atau berdagang apapun di pasar dan CRYPTOINDEX tidak bertanggung jawab atas perubahan fluktuasi dari nilai tukar Aset Kripto.
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Perdagangan Aset Kripto juga memiliki risiko tambahan yang tidak dialami oleh Aset Kripto atau komoditas lain di pasar. Tidak seperti mata uang kebanyakan yang dijamin oleh pemerintah atau lembaga legal lainnya, atau oleh emas dan perak, crypto asset merupakan sebuah Aset Kripto yang unik dan dijamin oleh teknologi dan rasa percaya. Tidak ada bank sentral yang dapat mengontrol, melindungi nilai Aset Kripto dalam krisis, atau mencetak mata uang tersebut.
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Member/Verified Member dihimbau untuk berhati-hati dalam mengukur situasi finansial dan memastikan bahwa Member/Verified Member bersedia menghadapi risiko yang ada dalam menjual, membeli, atau berdagang Aset Kripto . Member/Verified Member disarankan dengan sangat untuk melakukan riset pribadi sebelum membuat keputusan untuk memperjualbelikan Aset Kripto . Semua keputusan perdagangan Aset Kripto merupakan keputusan independen oleh pengguna secara sadar tanpa paksaan dan melepaskan CRYPTOINDEX atas kegiatan perdagangan Aset Kripto.
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            CRYPTOINDEX tidak menjamin kelangsungan jangka panjang dari Aset Kripto yang diperdagangkan maupun ditukar di dalam marketplace
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Berkenaan dengan kegiatan penambangan Aset Kripto perlu untuk diluruskan dan ditegaskan bahwa CRYPTOINDEX tidak melakukan kegiatan menambang, memproduksi atau mencetak Aset Kripto. Aset Kripto diciptakan dan ditambang menggunakan software khusus oleh para penambang (miner) yang tersebar secara acak di seluruh dunia dan saling terhubung dengan teknologi peer-to-peer di jaringan blockchain.
                        </li>
                    </ol>
                </div>
                {/* done */}
                {/* End of Section 4 */}

                {/* Section 4 */}
                <div className="">
                    <div className="pt-4 pb-3">
                        <h5 className="text-gold">KERAHASIAAN</h5>
                    </div>
                    <div>
                        <p className="font-16 text-white text-justify mb-2">
                        Selama bekerjasama dengan CRYPTOINDEX dan pada setiap waktu sesudahnya, maka:
                        </p>
                    </div>
                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2">
                            Setiap informasi dan atau data yang diberikan oleh CRYPTOINDEX kepada Member/Verified Member dan atau data yang diperoleh Member/Verified Member sebagai pelaksanaan dari SKB baik yang diberikan atau disampaikan secara lisan, tertulis, grafik atau yang disampaikan melalui media elektronik atau informasi dan atau data dalam bentuk lainnya selama berlangsungnya pembicaraan atau selama pekerjaan lain adalah bersifat rahasia (selanjutnya disebut sebagai <span className="font-weight-bold">“Informasi Rahasia”</span>).
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Member/Verified Member setuju dan sepakat bahwa setiap saat akan merahasiakan informasi rahasia yang diperoleh sebagai pelaksanaan dari kerjasama kepada siapapun atau tidak akan menggunakannya untuk kepentingan Member/Verified Member atau kepentingan pihak lainnya, tanpa terlebih dahulu memperoleh persetujuan tertulis dari pejabat yang berwenang dari CRYPTOINDEX atau pihak yang berwenang lainnya sesuai dengan ketentuan hukum yang berlaku.
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Apabila Member/Verified Member melanggar ketentuan sebagaimana dimaksud dalam angka 1 dan 2 ketentutan mengenai kerahasiaan ini, maka segala kerugian, tuntutan dan atau gugatan yang dialami CRYPTOINDEX merupakan tanggung jawab Member/Verified Member sepenuhnya, dan atas permintaan pertama dari CRYPTOINDEX, Member/Verified Member berkewajiban untuk menyelesaikannya sesuai dengan ketentuan hukum dan perundang-undangan yang berlaku dan Memberikan ganti rugi yang mungkin timbul akibat pelanggaran tersebut kepada CRYPTOINDEX. Member/Verified Member dengan ini setuju bahwa CRYPTOINDEX tidak akan Memberikan ganti rugi dan atau pertanggungjawaban dalam bentuk apapun kepada Member/Verified Member atau pihak manapun atas segala tuntutan dan atau gugatan yang mungkin timbul dikemudian hari sehubungan dengan pelanggaran tersebut.
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Kewajiban untuk menyimpan informasi rahasia sebagaimana dimaksud dalam angka 1 dan 2 ketentutan mengenai kerahasiaan menjadi tidak berlaku, apabila:
                            <ul>
                                <li className="text-white">Informasi rahasia tersebut menjadi tersedia untuk masyarakat umum.</li>
                                <li className="text-white">Informasi rahasia tersebut diperintahkan untuk dibuka untuk memenuhi perintah pengadilan atau badan pemerintahan lain yang berwenang.</li>
                                <li className="text-white">Informasi rahasia tersebut diberikan sesuai ketentuan hukum yang berlaku.</li>
                                <li className="text-white">Member/Verified Member selanjutnya menyetujui untuk melakukan segenap upaya dan mengambil setiap tindakan yang diperlukan untuk menghindari pihak-pihak ketiga dalam memperoleh akses terhadap atau mengakibatkan terjadinya pengungkapan atas informasi rahasia.</li>
                                <li className="text-white">Dalam hal kerjasama telah berakhir, Member/Verified Member sepakat bahwa kewajiban untuk merahasiakan dokumen dan materi yang merupakan informasi rahasia sebagaimana diatur dalam ketentuan ini akan tetap berlaku.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                {/* done */}
                {/* End of Section 4 */}

                {/* Section 4 */}
                <div className="">
                    <div className="pt-4 pb-3">
                        <h5 className="text-gold">PEMBLOKIRAN DAN PEMBEKUAN AKUN MEMBER/VERIFIED MEMBER</h5>
                    </div>
                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2">
                            Dalam rangka menjalankan prinsip kehati-hatian, CRYPTOINDEX berhak dan Member/Verified Member dengan ini memberi kuasa kepada CRYPTOINDEX untuk memblokir baik sebagian atau seluruh saldo Member/Verified Member (hold amount) dan/atau mendebetnya serta melakukan pemberhentian Akun, apabila terjadi hal berikut:
                            <ol>
                                <li className="text-white">Adanya permintaan dari pihak perbankan dikarenakan adanya kesalahan pengiriman dana dan pihak perbankan tersebut meminta dilakukan pemblokiran;</li>
                                <li className="text-white">Menurut pendapat dan pertimbangan CRYPTOINDEX terdapat kesalahan penerimaan transaksi;</li>
                                <li className="text-white">CRYPTOINDEX digunakan sebagai tempat  penampungan yang diindikasikan hasil kejahatan termasuk namun tidak terbatas pada Tindak Pidana korupsi, penyuapan, narkotika, psikotropika, penyelundupan tenaga kerja, penyelundupan manusia, bidang perbankan, bidang pasar modal, bidang perasuransian, kepabeanan, cukai, perdagangan manusia, perdagangan senjata gelap, terorisme, penculikan, pencurian, penggelapan, penipuan, pemalsuan, perjudian, prostitusi, bidang perpajakan, dan terorisme;</li>
                                <li className="text-white">Member/Verified Member dinilai lalai dalam melakukan kewajiban berdasarkan SKB;</li>
                                <li className="text-white">Kebijakan CRYPTOINDEX atau oleh suatu ketetapan pemerintah atau instansi yang berwenang atau peraturan yang berlaku, sehingga CRYPTOINDEX diharuskan melakukan pemblokiran dan atau pembekuan Akun CRYPTOINDEX tersebut.</li>
                            </ol>
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Apabila terjadi pemberhentian Akun, Member/Verified Member setuju dan menyatakan bersedia untuk tetap terikat dengan SK menghentikan penggunaan layanan CRYPTOINDEX, memberikan hak kepada Cryptoindex.com untuk menghapus semua informasi dan data dalam server CRYPTOINDEX, dan menyatakan CRYPTOINDEX tidak bertanggung jawab kepada Member/Verified Member atau Pihak Ketiga atas penghentian akses dan penghapusan informasi serta data dalam Akun Member/Verified Member.
                        </li>
                    </ol>
                </div>
                {/* done */}
                {/* End of Section 4 */}

                {/* Section 4 */}
                <div className="">
                    <div className="pt-4 pb-3">
                        <h5 className="text-gold">KEADAAN KAHAR/FORCE MAJEURE</h5>
                    </div>
                    <ul className="mb-0">
                        <li className="font-16 text-white text-justify mb-2">
                            <span className="font-bolder">
                                Yang dimaksud dengan Force Majeure adalah kejadian-kejadian yang terjadi di luar kemampuan dan kekuasaan CRYPTOINDEX sehingga mempengaruhi pelaksanaan transaksi antara lain namun tidak terbatas pada:
                            </span>
                            <br />
                            <ol className=" text-white text-justify mb-2 mt-2">
                                <li className="font-16">
                                    Gempa bumi, angin topan, banjir, tanah longsor, gunung meletus dan bencana alam lainnya;
                                </li>
                                <li className="font-16 mt-2">
                                    Perang, demonstrasi, huru-hara, terorisme, sabotase, embargo, dan pemogokan massal;
                                </li>
                                <li className="font-16 mt-2">
                                    Kebijakan ekonomi dari Pemerintah yang mempengaruhi secara langsung;
                                </li>
                            </ol>
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Sepanjang CRYPTOINDEX telah melaksanakan segala kewajibannya sesuai dengan peraturan perundang-undangan yang berlaku sehubungan dengan terjadinya Force Majeure tersebut, maka CRYPTOINDEX tidak akan memberikan ganti rugi dan atau pertanggungjawaban dalam bentuk apapun kepada Member/Verified Member atau pihak lain manapun atas segala risiko, tanggungjawab dan tuntutan apapun yang mungkin timbul sehubungan dengan keterlambatan maupun tidak dapat dilaksanakannya kewajiban akibat Force Majeure.
                        </li>
                    </ul>
                </div>
                {/* done */}
                {/* End of Section 4 */}

                {/* Section 4 */}
                <div className="">
                    <div className="pt-4 pb-3">
                        <h5 className="text-gold">PENYELESAIAN PERSELISIHAN</h5>
                    </div>
                    <div>
                        <p className="font-16 text-white text-justify mb-2">
                            Setiap perselisihan, sengketa atau perbedaan pendapat (selanjutnya disebut sebagai “<b>Perselisihan</b>”) yang timbul sehubungan dengan pelaksanaan kerjasama akan diselesaikan dengan cara sebagai berikut:
                        </p>
                    </div>
                    <ol className="mb-0">
                        <li className="font-16 text-white text-justify mb-2">
                            Bahwa setiap Perselisihan, sepanjang memungkinkan, akan diselesaikan dengan cara musyawarah untuk mufakat.
                        </li>
                        <li className="font-16 text-white text-justify mb-2">
                            Setiap Perselisihan yang tidak dapat diselesaikan secara musyawarah, akan diselesaikan melalui Pengadilan Negeri Jakarta Selatan.
                        </li>
                    </ol>
                </div>
                {/* done */}
                {/* End of Section 4 */}
            </div>
        </div>
        <FooterHomePage />
    </div>
  );
};

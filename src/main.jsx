import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Menu, X } from 'lucide-react';
import './styles.css';

const A = '/assets/';
const whatsapp = 'https://wa.me/6281190901440?text=Assalamualaikum%2C%20saya%20ingin%20berkonsultasi%20tentang%20paket%20umrah%20Safara.';

const packages = [
  { image:'package-regular.png', name:'Umrah Reguler', route:'12 Hari · Jakarta–Jeddah', date:'18 Oktober 2026', seats:'12 seat tersisa', airline:'Garuda Indonesia', category:'Bintang 4', makkah:'Elaf Kinda Hotel', madinah:'Saja Al Madinah', price:'Rp29.900.000' },
  { image:'package-turkey.png', name:'Umrah Plus Turki', route:'13 Hari · Jakarta–Istanbul–Jeddah', date:'2 November 2026', seats:'6 seat tersisa', airline:'Turkish Airlines', category:'Bintang 4–5', makkah:'Anjum Hotel Makkah', madinah:'Pullman Zamzam', price:'Rp38.900.000', limited:true },
  { image:'package-ramadan.png', name:'Umrah Ramadhan', route:'15 Hari · Makkah–Madinah', date:'15 Februari 2027', seats:'9 seat tersisa', airline:'Saudia Airlines', category:'Bintang 5', makkah:'Swissôtel Al Maqam', madinah:'Dar Al Taqwa', price:'Rp42.500.000' }
];
const reasons = [
  ['Travel resmi dan berizin','Legalitas jelas dan dapat diverifikasi sebelum Anda mendaftar.'],
  ['Pembimbing ibadah berpengalaman','Manasik terarah dan bimbingan yang menenangkan di setiap tahap.'],
  ['Hotel dan fasilitas transparan','Nama hotel, jarak, maskapai, dan layanan tertulis sejak awal.'],
  ['Pendampingan jamaah menyeluruh','Dari Indonesia hingga Tanah Suci, tim kami selalu dapat dihubungi.']
];
const stages = [['Persiapan','Dokumen & konsultasi'],['Manasik','Bekal ibadah terarah'],['Keberangkatan','Dibantu sejak bandara'],['Makkah','Fokus pada rangkaian umrah'],['Madinah','Ziarah dengan khidmat'],['Kepulangan','Kembali dengan tenang']];
const schedules = [['18 Oktober 2026','Umrah Reguler','Garuda Indonesia','12 Hari','Seat Tersedia'],['2 November 2026','Umrah Plus Turki','Turkish Airlines','13 Hari','Seat Terbatas'],['15 November 2026','Umrah Premium','Saudia Airlines','12 Hari','Seat Tersedia']];
const facilities = ['Hotel dekat Masjidil Haram dan Masjid Nabawi','Penerbangan terpercaya','Transportasi nyaman','Konsumsi Indonesia','Perlengkapan jamaah','Transparansi fasilitas'];
const stories = [
  ['Orang tua kami banyak dibantu, dari kursi roda sampai ritme ziarah. Kami sekeluarga bisa fokus beribadah tanpa merasa terburu-buru.','Keluarga Bapak Arif','Jakarta · Umrah Reguler 2026'],
  ['Pembimbingnya sabar sekali menjelaskan ulang. Di usia 67 tahun, saya merasa aman dan tidak pernah ditinggalkan rombongan.','Ibu Hj. Marwah','Bandung · Umrah Ramadhan 2026'],
  ['Jadwal dan fasilitas sesuai penjelasan awal. Komunikasi cepat membuat kami nyaman mengatur cuti dan keberangkatan berdua.','Nadia & Reza','Surabaya · Umrah Plus Turki 2026']
];

function Logo({light=false}) { return <a href="#beranda" className={`logo ${light?'light':''}`}><span className="logo-mark">S</span><span><b>SAFARA</b><small>UMRAH & HAJJ</small></span></a> }
function Label({children,light=false}) { return <div className={`eyebrow ${light?'light':''}`}><i />{children}</div> }
function Button({children,outline=false,href='#paket',icon=true}) { return <a className={`btn ${outline?'outline':''}`} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer">{children}{icon&&<ArrowRight size={17}/>}</a> }
function Heading({label,title,copy,light=false}) { return <div className={`heading ${light?'light':''}`}><Label light={light}>{label}</Label><h2>{title}</h2>{copy&&<p>{copy}</p>}</div> }

function App(){
 const [open,setOpen]=useState(false);
 const links=[['Beranda','beranda'],['Paket Umrah','paket'],['Jadwal Keberangkatan','jadwal'],['Tentang Kami','tentang'],['Galeri','fasilitas'],['Testimoni','testimoni'],['FAQ','footer']];
 return <main>
  <header><Logo/><nav className={open?'open':''}>{links.map(([t,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{t}</a>)}</nav><a className="header-cta" href={whatsapp} target="_blank"><img src={A+'message-light.svg'} alt=""/>Konsultasi WhatsApp</a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Buka menu">{open?<X/>:<Menu/>}</button></header>

  <section className="hero" id="beranda"><div className="hero-copy"><Label>Umrah dengan hati yang tenang</Label><h1>Perjalanan Ibadah yang Tenang, Aman, dan Penuh Makna.</h1><p>Berangkat ke Tanah Suci bersama tim berpengalaman, fasilitas terpilih, dan pendampingan sejak persiapan hingga kembali ke Indonesia.</p><div className="actions"><Button>Lihat Paket Umrah</Button><Button outline href={whatsapp}>Konsultasi dengan Kami</Button></div><div className="trust"><span>PPIU Resmi</span><i/><span>Pendamping Berpengalaman</span><i/><span>Ribuan Jamaah Terlayani</span></div></div><div className="hero-photo"><img src={A+'hero.png'} alt="Jamaah Safara di depan Ka'bah"/><div><b>PENDAMPINGAN MENYELURUH</b><span>Tenang beribadah, kami urus perjalanannya.</span></div></div></section>
  <section className="credibility">{[['PPIU','Resmi & berizin'],['10+','Tahun pengalaman'],['5.000+','Jamaah terlayani'],['4,9','Rating Google'],['5★','Partner airline terpercaya']].map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</section>

  <section className="section packages" id="paket"><div className="section-top"><Heading label="Program unggulan" title="Paket Umrah Pilihan" copy="Pilihan program yang disusun transparan—dari jadwal, maskapai, hotel, hingga pendampingan ibadah."/><p>Harga dan ketersediaan kursi diperbarui berkala. Konsultan kami akan membantu menyesuaikan kebutuhan keluarga Anda.</p></div><div className="package-list">{packages.map(p=><article className="package" key={p.name}><img src={A+p.image} alt={p.name}/><div className="package-overview"><h3>{p.name}</h3><b>{p.route}</b><p>Keberangkatan<br/>{p.date}</p><hr/><strong className={p.limited?'limited':''}>{p.seats}</strong></div><div className="facts">{[['Maskapai',p.airline],['Kategori hotel',p.category],['Hotel Makkah',p.makkah],['Hotel Madinah',p.madinah]].map(([k,v])=><div key={k}><small>{k}</small><b>{v}</b></div>)}</div><div className="price"><div><small>Mulai dari</small><strong>{p.price}</strong><span>per jamaah · kamar berempat</span></div><Button href={whatsapp}>Lihat Detail</Button></div></article>)}</div></section>

  <section className="reasons" id="tentang"><div className="reason-photo"><img src={A+'reasons.png'} alt="Pendampingan jamaah Safara"/><div><b>BIMBINGAN PERSONAL</b><span>Setiap jamaah didampingi dengan penuh perhatian.</span></div></div><div className="reason-copy"><Heading label="Komitmen pelayanan" title="Beribadah dengan Lebih Tenang" copy="Kepercayaan tumbuh dari informasi yang jelas, tim yang hadir, dan layanan yang konsisten."/><div className="reason-list">{reasons.map(([t,c],i)=><div key={t}><span>{String(i+1).padStart(2,'0')}</span><p><b>{t}</b><small>{c}</small></p></div>)}</div></div></section>

  <section className="journey"><div className="journey-top"><Heading light label="Setiap langkah, kami dampingi" title="Perjalanan Anda Bersama Kami" copy="Sebuah perjalanan yang dipersiapkan dengan cermat agar Anda dapat hadir sepenuhnya dalam ibadah."/><blockquote>“Dari niat yang tumbuh di rumah hingga syukur saat kembali.”</blockquote></div><img className="journey-img" src={A+'journey.png'} alt="Jamaah Safara dalam perjalanan"/><div className="timeline">{stages.map(([t,c],i)=><div key={t}><i className={i===0?'active':''}/><b>{t}</b><small>{c}</small></div>)}</div></section>

  <section className="section schedule" id="jadwal"><div className="section-top"><Heading label="Rencanakan keberangkatan" title="Jadwal Keberangkatan Terdekat" copy="Informasi ringkas yang mudah dibaca. Hubungi konsultan untuk konfirmasi kursi dan tipe kamar."/><Button outline>Lihat Semua Jadwal</Button></div><div className="table"><div className="tr th"><span>Tanggal</span><span>Program</span><span>Maskapai</span><span>Durasi</span><span>Ketersediaan</span></div>{schedules.map((r,i)=><div className="tr" key={r[0]}>{r.map((v,j)=><span key={v} data-label={['Tanggal','Program','Maskapai','Durasi','Ketersediaan'][j]}>{j===4?<b className={i===1?'pill limited':'pill'}>{v}</b>:v}</span>)}</div>)}</div><small className="note">* Jadwal dapat menyesuaikan ketersediaan penerbangan dan kebijakan otoritas terkait.</small></section>

  <section className="facilities" id="fasilitas"><div><Heading label="Kenyamanan yang jelas" title="Hotel & Fasilitas Terpilih" copy="Detail kenyamanan bukan kejutan. Kami memilih fasilitas yang mendukung ritme ibadah jamaah dan menjelaskannya sejak awal."/><ol>{facilities.map(x=><li key={x}>{x}</li>)}</ol><blockquote>Nyaman secukupnya, transparan sepenuhnya.<small>Pilihan final tercantum di dokumen program perjalanan.</small></blockquote></div><div className="gallery"><img src={A+'hotel.png'} alt="Kamar hotel dengan pemandangan Masjidil Haram"/><div><img src={A+'dining.png'} alt="Hidangan Indonesia"/><img src={A+'transport.png'} alt="Transportasi jamaah"/></div></div></section>

  <section className="section legality"><div><Heading label="Bukti, bukan sekadar janji" title="Legalitas yang Dapat Anda Verifikasi" copy="Safara terdaftar sebagai Penyelenggara Perjalanan Ibadah Umrah. Kami mengundang calon jamaah untuk memeriksa data izin sebelum mendaftar."/><p className="verify"><img src={A+'badge.svg'}/>Data dapat dicocokkan melalui sistem resmi Kementerian Agama Republik Indonesia.</p><Button href="https://simpu.kemenag.go.id/">Verifikasi Legalitas</Button></div><div className="document"><header><div><small>PT SAFARA CAHAYA NUSANTARA</small><h3>Profil Legalitas Perusahaan</h3></div><b>AKTIF · TERVERIFIKASI</b></header>{[['Izin PPIU','SK PPIU No. 912020026 — status aktif'],['Penerbit','Kementerian Agama Republik Indonesia'],['Alamat kantor','Jl. Tebet Raya No. 47, Jakarta Selatan 12820'],['Berdiri sejak','2016 · 10+ tahun melayani jamaah']].map(([k,v])=><div className="doc-row" key={k}><span>{k}</span><b>{v}</b></div>)}</div></section>

  <section className="testimonials" id="testimoni"><div className="testimonial-photo"><img src={A+'testimonial.png'} alt="Keluarga jamaah Safara"/><small>Jamaah Safara, Madinah · Dokumentasi perjalanan 2026</small></div><div><Heading label="Pengalaman nyata" title="Cerita dari Para Jamaah" copy="Pengalaman yang paling berarti sering terdengar dari hal sederhana: merasa diperhatikan, diberi kejelasan, dan tidak berjalan sendiri."/><div className="stories">{stories.map(([q,n,d])=><blockquote key={n}><i>“</i><div><p>{q}</p><b>{n}</b><small>{d}</small></div></blockquote>)}</div></div></section>

  <section className="consult"><div><b>KONSULTASI TANPA KOMITMEN</b><h2>Mari rencanakan perjalanan ibadah yang paling sesuai untuk Anda.</h2><p>Ceritakan pilihan tanggal, anggaran, dan kebutuhan keluarga. Konsultan kami akan membantu memilih program dengan jujur dan jelas.</p><a className="btn gold" href={whatsapp} target="_blank"><img src={A+'message-dark.svg'} alt=""/>Mulai Konsultasi WhatsApp</a></div><img src={A+'consultation.png'} alt="Konsultasi perjalanan umrah"/></section>

  <footer id="footer"><div className="footer-grid"><div className="brand"><Logo light/><h3>Mendampingi perjalanan suci dengan tenang, aman, dan penuh makna.</h3><p>Jl. Tebet Raya No. 47, Jakarta Selatan 12820<br/>WhatsApp +62 811 9090 1440<br/>salam@safaraumrah.id<br/>Senin–Sabtu · 09.00–17.00 WIB</p></div>{[['Jelajahi',['Beranda','Paket Umrah','Jadwal Keberangkatan','Tentang Kami','Galeri']],['Informasi',['Testimoni','FAQ','Panduan Persiapan','Kebijakan Privasi','Syarat & Ketentuan']],['Legalitas',['Verifikasi PPIU','Kementerian Agama','Izin Perusahaan','Perlindungan Jamaah']],['Ikuti Kami',['Instagram','YouTube','Facebook','TikTok']]].map(([t,ls])=><div className="footer-links" key={t}><b>{t}</b>{ls.map(x=><a href="#beranda" key={x}>{x}</a>)}</div>)}</div><div className="footer-bottom"><span>© 2026 PT Safara Cahaya Nusantara. Hak cipta dilindungi.</span><b>Ibadah adalah tujuan. Pelayanan adalah amanah.</b></div></footer>
 </main>
}

createRoot(document.getElementById('root')).render(<App/>);

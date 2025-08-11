<template>
  <main>
    <section class="w-full py-[150px] md:py-24 lg:py-[150px]">
      <div class="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div class="flex flex-col justify-center">
          <h1
            class="emplyoment-title text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl"
          >
            Ishga Marhamat
          </h1>
          <p class="max-w-[600px]">
            "Central Asian Medical University" xalqaro tibbiyot universitetida kafedra mudirlari va fanlar bo'yicha 2025/2026 o'quv yili uchun professor-o'qituvchilarning quyidagi vakant lavozimlarga tanlov e'lon qiladi:
          </p>
          <a class="employment-btn" href="tel:+998954850070">Ariza topshirish</a>
        </div>
        <img
          src="@/assets/images/jpg/welcome.png"
          width="550"
          height="500"
          alt="Hero"
          class="mx-auto aspect-[11/10] overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
      <div class="container">
        <div class="employment-list">
          <div class="employment-column">
            <div class="employment-item">
              <strong>I. Kafedra mudirlari:</strong>
              <ul>
                <li>"Akusherlik – ginekologiya va neontologiya kursi" kafedrasi</li>
                <li>"Ftiziatriya va metabolik kasalliklar" kafedrasi</li>
                <li>"Nevrologiya va psixiatriya kursi" kafedrasi</li>
                <li>"Oilaviy tibbiyotda ichki kasalliklar" kafedrasi</li>
                <li>"Onkologiya va tibbiy radiologiya" kafedrasi</li>
                <li>"Patologik anatomiya va sud tibbiyoti" kafedrasi</li>
                <li>"Xirurgik va ortopedik stomatologiya" kafedrasi</li>
                <li>"Xirurgik va klinik fanlar" kafedrasi</li>
                <li>"Yuqumli kasalliklar va dermatovenerologiya kursi" kafedrasi</li>
              </ul>
              <p class="mt-2 text-sm">
                Kafedra mudirligi lavozimiga tanlovda fan doktorlari, professorlar yoki fan nomzodlari, dotsentlar qatnashishi mumkin.
              </p>
            </div>
            <div class="employment-item">
              <p>Tanlovda ishtirok etuvchi talabgorlar eʼlon ommaviy axborot vositasida eʼlon qilingan kundan boshlab 1 oy muddat ichida quyidagi hujjatlar toʻplamini taʼlim muassasasi ishchi guruhiga topshirishlari zarur.</p>
              <ul>
                <li>Rektor nomiga ariza</li>
                <li>Tarjimai hol</li>
                <li>Pasport nusxasi</li>
                <li>Obyektivka maʼlumotnoma</li>
                <li>3.5x4.5 rasm 6 dona</li>
                <li>
                  Diplom nusxalari (bakalavr, magistr, klinik ordinatura, ilmiy daraja) ilovalari bilan
                </li>
                <li>Ilmiy ishlar roʻyxati (3.4 shakl)</li>
                <li>
                  Pedagog xodimning malaka oshirish sertifikati - agar talabgor ordinatura yoʻnalishini tugatgan boʻlsa, qayta tayyorlov kursi sertifikati
                </li>
                <li>Til bilish sertifikati (agar mavjud boʻlsa)</li>
              </ul>
            </div>
          </div>
          <div class="employment-column">
            <div class="employment-item">
              <strong>II. Assistentlar:</strong>
              <ul>
                <li>Ichki kasalliklar. Kasb kasalliklari. XDT. (Ichki kasalliklar) Gigiyena. Tibbiy ekologiya – 8 ta o'rin</li>
                <li>Pediatriya – 5 ta o'rin</li>
                <li>Tibbiy radiologiya – 7 ta o'rin</li>
                <li>Dermatovenerologiya – 7 ta o'rin</li>
                <li>Psixiatriya, narkologiya. Tibbiy psixologiya (Tibbiy psixologiya) – 1 ta o'rin</li>
                <li>Onkologiya. Gematologiya. (Gematologiya) – 2 ta o'rin</li>
                <li>Terapiya: Ichki kasalliklar – 5 ta o'rin</li>
                <li>Xirurgiya: Xirurgik kasalliklar – 5 ta o'rin</li>
                <li>Travmatologiya va ortopediya. Bolalar travmatologiyasi va ortopediyasi – 4 ta o'rin</li>
                <li>Ftiziatriya – 4 ta o'rin</li>
                <li>Sud tibbiyoti va varch faoliyatining huquqiy asoslari – 3 ta o'rin</li>
                <li>Klinik farmokologiya – 5 ta o'rin</li>
                <li>Klinik restavratsion stomatologiya – 2 ta o'rin</li>
                <li>Xirurgik stomatologiya – 2 ta o'rin</li>
                <li>Klinik endodontiya – 3 ta o'rin</li>
                <li>Stomatologik kasalliklar profilaktikasi – 3 ta o'rin</li>
                <li>Ogʻiz boʻshligʻi jarrohligi – 1 ta o'rin</li>
                <li>Olinadigan tishlar bilan protezlash – 2 ta o'rin</li>
                <li>Ortodontiya – 1 ta o'rin</li>
                <li>Yuz-jagʻ kasalliklari va jarohatlari – 2 ta o'rin</li>
                <li>Dermatovenerologiya va bolalar dermatovenerologiyasi – 2 ta o'rin</li>
              </ul>
            </div>

          </div>
        </div>
        <p class="employment-desc">
          Tanlovda ishtirok etuvchi talabgorlarda ilmiy daraja, pedagogik staj va xorijiy tillarni bilish sertifikati borlarga ustuvorlik beriladi.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.employment-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem 0 1rem;

  .employment-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .employment-item {
    padding: 1.5rem;
    border-radius: 0.5rem;
    p {
      margin-bottom: 20px;
    }
   
    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
      margin-bottom: 1rem;

      li {
        margin-bottom: 0.5rem;
      }
    }

    p {
      font-size: 0.875rem;
    }
  }
}

.employment-desc {
  margin-top: 1.5rem;
  font-size: 0.875rem;
}
</style>
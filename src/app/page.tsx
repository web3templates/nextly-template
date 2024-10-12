//internal components
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo, mission } from "@/components/data";
import StudentTypeList from "@/components/student-type/student-type-list";

//files
import dataCourses from "../data-json/dataStudent.json";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle title="Sobre a Teacher">
        Professora com 6 (seis) anos de experiência, sendo 5 (cinco) desses anos
        em ensino online. Experiência com ESL (English as Second Language)
        ensinando crianças, adolescentes e adultos. Também tem experiência com
        alunos de outros países, como: Japão, Arábia Saudita e Marrocos. Já
        preparou alunos para alguns exames, como IELTS, TOEFL e EIKEN (exame de
        proficiência em inglês do Japão). Além das aulas online, trabalhou em
        escolas de ensino regular e bilíngue, atuando no infantil, fundamental I
        e II. Antes de trabalhar com ensino, trabalhou por mais de 8 (oito) anos
        na área de Recursos Humanos e Departamento Pessoal, tendo graduação em
        Gestão de Recursos Humanos e MBA em Gestão de Pessoas. Atualmente está
        cursando o último ano do curso de Letras-Inglês.
      </SectionTitle>

      <Benefits imgPos="right" data={mission} />

      <Benefits data={benefitOne} />

      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="" title="Vantagens de estudar com a LABELLE">
        <div>
          <ul>
            <li>
              Flexibilidade Geográfica: estude onde quiser, confortável e sem
              precisar sair de casa
            </li>
            <li>Material Didático sem custo adicional</li>
            <li>
              Perdeu a aula? Quando avisado previamente, você poderá repô-la
            </li>
          </ul>
        </div>
      </SectionTitle>

      <SectionTitle preTitle="" title="HAPPY STUDENTS">
        Veja alguns depoimentos de nossos alunos satisfeitos com os cursos e
        resultados.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </>
  );
}

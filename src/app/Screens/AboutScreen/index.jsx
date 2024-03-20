import { Title } from "@/components/Title";
import { Section } from "./Section";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

export const AboutScreen = () => {
  return (
    <main className="layout-container mt-7 sm:mt-9 lg:mt-12 ">
    <div className="flex flex-col gap-8 my-10 lg:w-[640px] lg:m-auto">
    <Title type="dark">Sobre</Title>
      <Section sectionTitle='Ponte para o mercado'>
        <p>
          Ponte é um programa de iniciativa da Prosper Tech, cujo objetivo é debloquear o potencial de cada aluna(o) no universo do React.js.
        </p>
      </Section>

      <Section sectionTitle="Case Prático: Pizzaria">
        <p>
          Trata-se de um sistema de pedido online para uma pizzaria utilizando React.js. 
        </p>
        <p>
          Este é um projeto que que oferece a oportunidade de aplicar todos os conceitos desenvolvidos durante a trilha de aprendizado.
        </p>
      </Section>

      <Section sectionTitle='Requisitos do Case'>
        <div className="about-section-content-container">
          <h3 className="about-section-title">Autenticação e Formulário de Login:</h3>
          <ul className="about-section-list-container">
            <li>- Implementar um formulário de login com cantos arredondados, utilizando as propriedades em CSS</li>
            <li>- Adicionar uma sombra sutil aos botões de login para destacá-los.</li>
          </ul>
        </div>

        <div className="about-section-content-container">
          <h3 className="about-section-title">Listagem de Pizzas:</h3>
          <ul className="about-section-list-container">
            <li>- Exibir dinamicamente as opções de pizzas disponíveis, utilizando componentes React para representar cada item do cardápio</li>
            <li>- Aplicar estilos utilizando Tailwind CSS para garantir uma apresentação moderna e responsiva.</li>
          </ul>
        </div>

        <div className="about-section-content-container">
          <h3 className="about-section-title">Seleção de Pizzas</h3>
          <ul className="about-section-list-container">
            <li>- Permitir aos usuários selecionar a quantidade desejada de cada pizza, utilizando componentes controlados e estados em React</li>
          </ul>
        </div>

        <div className="about-section-content-container">
          <h3 className="about-section-title">Carrinho de compras:</h3>
          <ul className="about-section-list-container">
            <li>- Implementar um carrinho de compras dinâmico que exibe as pizzas selecionadas, a quantidade e o total.</li>
          </ul>
        </div>

        <div className="about-section-content-container">
          <h3 className="about-section-title">Finalização do pedido:</h3>
          <ul className="about-section-list-container">
            <li>- Permitir aos usuários revisar o pedido, ajustar as quantidades e finalizar a compra.</li>
            <li>- Utilizar o Next.js para otimizar o carregamento da página de confirmação do pedido, aproveitando as vantagens do SSR.</li>
          </ul>
        </div>

        <div className="about-section-content-container">
          <h3 className="about-section-title">Autenticação com Redux:</h3>
          <ul className="about-section-list-container">
            <li>- Introduzir o Redux para gerenciar o estado global da aplicação, incluindo informações sobre o usuário autenticado.</li>
          </ul>
        </div>

        <div className="about-section-content-container">
          <h3 className="about-section-title">Responsividade:</h3>
          <ul className="about-section-list-container">
            <li>- Garantir que a aplicação seja totalmente responsiva</li>
            <li>- Implementar breakpoints para garantir uma experiência de usuário consistente em diferentes dispositivos.</li>
          </ul>
        </div>

        <div className="about-section-content-container">
          <h3 className="about-section-title">Acessibilidade e Atributos ARIA:</h3>
          <ul className="about-section-list-container">
            <li>- Integrar atributos ARIA para melhorar a acessibilidade da aplicação, tornandoa mais amigável para usuários com deficiência.</li>
          </ul>
        </div>

        <div className="about-section-content-container">
          <h3 className="about-section-title">Controle de versão com Git:</h3>
          <ul className="about-section-list-container">
            <li>- Configurar um repositório Git para o projeto, garantindo um histórico de alterações e facilitando a colaboração entre os membros da equipe</li>
          </ul>
        </div>
      </Section>

      <Section sectionTitle='Construção do layout'>
        <p>
          Para a criação do layout da Prosperizza, utilizei como referência páginas de Pizzarias famosas e layouts encontrados no Dribbble.
        </p>          
        <p>
          Todo o protótipo foi desenvolvido no Figma.
        </p>

        <p>O nome Prosperizza surgiu da ideia de unir a Prosper Tech e pizzaria. Todo o conceito deste projeto brinca com a ideia de uma pizzaria para devs.</p>
      </Section>

      <Section sectionTitle='Ferramentas e tecnologias utilizadas'>
        <ul>
          <li>- React</li>
          <li>- Next.js 14</li>
          <li>- MongoDB Atlas</li>
          <li>- ContextAPI</li>
          <li>- TailwindCSS</li>
          <li>- Phosphor icons</li>
          <li>- Figma</li>
          <li>- Git/ GitHub</li>
          <li>- Vercel - Deploy</li>
        </ul>
      </Section>

      <Section sectionTitle='Código fonte'>
        <p>O código fonte do projeto está disponível no link abaixo:</p>
          <a href="https://github.com/lucianakyoko" target="_blank" rel="noopener noreferrer" className="flex items-center secondary-button w-fit">
            <GithubLogo size={32} />
            GitHub
          </a>
      </Section>
    </div>
  </main>
  );
}
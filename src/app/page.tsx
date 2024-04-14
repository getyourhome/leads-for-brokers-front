import Hero from "@/features/Hero/Hero";
import RegisterCall from "@/features/RegisterCall";

export default function Home() {
  return (
    <>
      <Hero />
      <RegisterCall
        title="Encontre seu imóvel"
        description="O imóvel do seus sonhos vai até você"
        buttonLink="/register/announcer"
        buttonTitle="Cadastre seu anúncio"
        bgVariant="bg_user_register_call"
        buttonIcon="."
      />
      <RegisterCall
        title="Corretor: faça seu cadastro"
        description="Tenha acesso a uma infinidade de leads qualificados"
        buttonTitle="Para corretores"
        buttonLink="/register/broker"
        bgVariant="bg_broker_register_call"
        buttonIcon="."
      />
    </>
  );
}

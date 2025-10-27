import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SofisticarLanding() {
  return (
    <div className="min-h-screen bg-[#0B1D39] text-white font-poppins">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 text-white"
        >
          Sofisticar
        </motion.h1>
        <p className="text-lg max-w-2xl text-gray-300 mb-8">
          A forma mais inteligente de gerenciar e vender veículos. Automatize seu estoque, 
          publique em múltiplos portais e aumente suas vendas com inteligência artificial.
        </p>
        <Button className="bg-[#FF6B00] hover:bg-[#ff7e1f] text-white px-6 py-3 text-lg rounded-2xl">
          Teste grátis por 7 dias
        </Button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 px-8 md:px-20 py-16 bg-[#101C2E]">
        {[
          {
            title: "Gestão de Estoque",
            text: "Controle total sobre seus veículos, status e documentação em um só lugar.",
          },
          {
            title: "Publicação Automática",
            text: "Anuncie em OLX, Webmotors e outros portais com um clique.",
          },
          {
            title: "IA de Precificação",
            text: "Descubra o preço ideal de cada veículo com base em dados reais do mercado.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="bg-[#0B1D39] border-none text-center p-6 rounded-2xl shadow-lg">
              <CardContent>
                <h3 className="text-xl font-semibold mb-3 text-[#FF6B00]">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-8 bg-[#0B1D39]">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Venda mais, anuncie melhor, trabalhe menos.
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Experimente a Sofisticar e descubra como a tecnologia pode transformar sua revenda.
        </p>
        <Button className="bg-[#FF6B00] hover:bg-[#ff7e1f] text-white px-6 py-3 text-lg rounded-2xl">
          Criar conta gratuita
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm bg-[#101C2E]">
        © 2025 Sofisticar. Todos os direitos reservados.
      </footer>
    </div>
  );
}
npm install tailwindcss framer-motion @shadcn/ui lucide-react

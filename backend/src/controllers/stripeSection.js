const stripe = require("../services/stripe");

const ebookDescription = "Um eBook para jovens que se sentem perdidos, estagnados ou distraídos.Com linguagem provocativa e sem enrolação, “Desperta, Jovem!” mostra como sair da zona de conforto, parar de se sabotar e começar a construir uma vida com propósito, foco e atitude.";

async function createStripeSection(req, res) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'boleto'],  
            mode: 'payment', 
            line_items: [
                {
                price_data: {
                    currency: 'brl',
                    product_data: {
                    name: 'Desperta, Jovem!',
                    description: ebookDescription,
                    },
                    unit_amount: 1250,
                },
                quantity: 1,
                }
            ],
            
            success_url: `${process.env.FRONT_URL}${process.env.PORT}/ebook/download`,
            cancel_url: 'http://undefined',
        });

        res.json({ url: session.url });
    } catch (err) {
        res.json({ error: "Ocorreu um erro ao criar uma sessão com o stripe." });
    }
}

module.exports = createStripeSection;
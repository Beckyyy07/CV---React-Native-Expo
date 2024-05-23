import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function Perfil() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/Foto.jpg")} style={styles.imagem} />
      <Text style={styles.cabecalho}>Rebeka Dias</Text>
      <Text style={styles.subtitulo}>Cientista de Dados & Analista de Dados</Text>
      <Text style={styles.paragrafo}>
      Sou ciêntista e analista de dados, estudante de Análise e Desenvolvimento de Sistemas pela faculdade Senac, bolsista do Embarque Digital.
      </Text>
      <Text style={styles.title}>
        TECNOLOGIAS:
      </Text>
      <Text style={styles.listItem}>
        • Bibliotecas: Pandas, NumPy, Matplotlib, Scikit-learn
      </Text>
      <Text style={styles.listItem}>
        • Ferramentas de visualização: Power BI
      </Text>
      <Text style={styles.listItem}>
        • Linguagens de programação: Python, SQL, Java, Python, JavaScript.
      </Text>
      <Text style={styles.listItem}>• Banco de dados: MySQL, MongoDB.</Text>
      <Text style={styles.listItem}>• Ferramentas de desenvolvimento: Git, GitHub.</Text>

      <Text style={styles.title}>
        SOBRE MIM:
      </Text>

      <Text style={styles.paragrafo}>
      Embora meu curso não se concentre especificamente em ciência de dados, estou me dedicando a essa área, buscando conhecimentos e desenvolvendo habilidades.
      Estou também me especializando em Python, para análise e manipulação de dados, e já possuo conhecimentos em Java, ampliando meu conjunto de habilidades. 
      Adquiri uma valiosa experiência como aprendiz na área de logística na Unilever Igarassu, onde trabalhei como analista de dados e utilizei ferramentas como o Power BI, Excel e SAP. 
      </Text>
      <Text style={styles.title}>
        CONTATOS:
      </Text>
      <Text style={styles.paragrafo}>
        Visite meu GitHub {""}
        <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/Beckyyy07")}> https://github.com/Beckyyy07 </Text>
        {""}
        {""}
        e meu LinkedIn {""}
        <Text style={styles.link} onPress={() => Linking.openURL("https://www.linkedin.com/in/rebeka-dias-864608205/")}>https://www.linkedin.com/in/rebeka-dias
        </Text>
        .
      </Text>
    </ScrollView>
  );
}

function Experiencia() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.H1}>
        Aprendiz de Análise de Dados - Unilever Igarassu 
      </Text>
      <Text style={styles.title}> Janeiro 2023 - Março 2024</Text>
      <Text style={styles.listItem}>
        • Desenvolvimento e suporte personalizado para aplicativos utilizando Power Apps, garantindo soluções adaptadas às necessidades específicas em diversas áreas; </Text>
      <Text style={styles.listItem}>
        •  Gerenciamento completo do ciclo de dados, desde a coleta até a análise e processamento; 
        </Text>
      <Text style={styles.listItem}>
        •  Mapeamento detalhado do processo logístico;
        </Text>
      <Text style={styles.listItem}>
        •  Supervisão de estadias;
        </Text>
      <Text style={styles.listItem}>
        •  Implementação de automações, visando otimizar as operações e reduzir o tempo gasto em tarefas repetitivas.
        </Text>
      <Text style={styles.listItem}>
        •  Desenvolvimento de relatórios e dashboards informativos utilizando o Power BI, 
         proporcionando uma visão abrangente e clara das informações essenciais para a tomada de decisões estratégicas.
        </Text>
      <Text style={styles.H1}>
        Residência Onboard - Porto Digital
      </Text>
      <Text style={styles.title}>Mar 2023 - O momento</Text>
      <Text style={styles.paragrafo}>
        Durante minha graduação de Análise e Desenvolvimento de Sistemas, participo de projetos com empresas reais
        onde tenho a oportunidade de aprender na prática e participar da resolução de desafios reais de empresas parceiras do Porto Digital.
      </Text>
      <Text style={styles.title}>• MOM App - Porto Digital</Text>
      <Text style={styles.H3}> 1° semestre - Março 2023/ Junho 2023</Text>
      <Text style={styles.paragrafo}>
      Um app onde mães cuidam da saúde com conforto e facilidade, se conectando e trocando experiências importantes para gestação, além de informações sobre cuidados saudáveis durante e após esse período.
      Recursos: Área Prática para Sanar Duvidas, comunidade de Mães, autocuidado de forma facilitada, recomendações de profissionais</Text>

      <Text style={styles.title}>• WatchList - Loomi</Text>
      <Text style={styles.H3}> 2° semestre - Agosto 2023/ Dezembro 2023</Text>
      <Text style={styles.paragrafo}>
      Um app desenvolvido em Flutter, onde os usuários podiam gerenciar uma lista personalizada de filmes que desejavam assistir. permitindo aos usuários adicionar novos filmes à lista, visualizar os detalhes dos filmes, remover filmes da watchlist. 
      Para enriquecer a experiência do usuário, a aplicação consumia dados de uma API externa, para fornecer informações atualizadas e detalhadas sobre cada filme
      </Text>
      
      <Text style={styles.title}>• SEDig - Eletrobrás</Text>
      <Text style={styles.H3}> 3° semestre - Março 2024/ Junho 2024</Text>
      <Text style={styles.paragrafo}>
         EM PRODUÇÃO
      </Text>
      
    </ScrollView>
  );
}

function Educacao() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.cabecalho}>
        Formação
      </Text>

      <Text style={styles.title}>
        Tecnólogo em Análise e Desenvolvimento de Sistemas
      </Text>
      <Text style={styles.paragrafo}>
        Faculdade Senac Pernambuco, Março 2023 - o momento.
      </Text>
      <Text style={styles.title}>Técnico em Desenvolvimento de Sistemas</Text>
      <Text style={styles.paragrafo}>
        ETE Jurandir Bezerra Lins, Agosto 2022 - Jan 2023 (TRANCADO).
      </Text>
      <Text style={styles.title}>Técnico em Guia de Turismo</Text>
      <Text style={styles.paragrafo}>
        ETE Jurandir Bezerra Lins, Janeiro 2018 - Dezembro 2020.
      </Text>

      <Text style={styles.cabecalho}>
        Outros cursos:
      </Text>
      <Text style={styles.title}>
      Fundamentos e Técnicas de Machine Learning
      </Text>
      <Text style={styles.paragrafo}>
      DIO, Maio 2024
      </Text>
      <Text style={styles.title}>
       visualização e Análise de Dados com Power BI
      </Text>
      <Text style={styles.paragrafo}>
      DIO, Abril 2024 - Maio 2024
      </Text>
      <Text style={styles.title}>
       Imersão Python: Do Excel à Ánalise de Dados
      </Text>
      <Text style={styles.paragrafo}>
      Alura, Abril 2024
      </Text>
      <Text style={styles.title}>
        Introdução a Ciência de Dados com Python
      </Text>
      <Text style={styles.paragrafo}>
        DIO, Abril 2024
      </Text>
      <Text style={styles.title}>
        Análise de dados com Pandas 
      </Text>
      <Text style={styles.paragrafo}>
        Udemy, Março 2024
      </Text>
      <Text style={styles.title}>
        Fundamentos da Engenharia de Dados
      </Text>
      <Text style={styles.paragrafo}>
        Data Science Academy, Janeiro 2024 -  Fevereiro 2024
      </Text>
      <Text style={styles.title}>
        Decola Tech 2024
      </Text>
      <Text style={styles.paragrafo}>
        DIO, Dezembro 2023 - Janeiro 2024
      </Text>
      <Text style={styles.title}>
       Proteção de Dados em Segurança de Redes de Computadores
      </Text>
      <Text style={styles.paragrafo}>
        Centro Universitário Senac, Novembro 2023 - Dezembro 2023
      </Text>
      <Text style={styles.title}>
      Santander Bootcamp 2023 - Fullstack Java+Angular
      </Text>
      <Text style={styles.paragrafo}>
        DIO, Agosto 2023 - Outubro 2023
      </Text>
      <Text style={styles.title}>
      Introdução a Criação de Websites com HTML5 e CSS3
      </Text>
      <Text style={styles.paragrafo}>
      DIO, Setembro 2022 - Setembro 2022
      </Text>
      <Text style={styles.title}>Logística</Text>
      <Text style={styles.paragrafo}>
        SENAI, Agosto 2021 - Dezembro 2021.
      </Text>
    </ScrollView>
  
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experiencia") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Educacao") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "#333333",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: "#4287f5",
          },
          cabecalhoTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Experiencia" component={Experiencia} />
        <Tab.Screen name="Educacao" component={Educacao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  cabecalho: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  H1: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  H3: {
    fontSize: 15,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },
  paragrafo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },

  title:{
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left"
  },

  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#008080",
    textDecorationLine: "underline",
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#4287f5",
    alignSelf: "center",
    marginBottom: 20,
  },
});
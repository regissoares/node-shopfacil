// Generated by CoffeeScript 2.4.1
(function() {
  var request, shopfacil;

  request = require("request");

  shopfacil = class shopfacil {
    constructor(cfg) {
      this.merchantId = cfg.merchantId;
      this.chaveDeSeguranca = cfg.chaveDeSeguranca;
      this.sandbox = cfg.sandbox || false;
    }

    pedido(pedido) {
      this.pedido = {};
      if (pedido.numero != null) {
        this.pedido.numero = pedido.numero;
      }
      if (pedido.valor != null) {
        this.pedido.valor = pedido.valor;
      }
      if (pedido.descricao != null) {
        this.pedido.descricao = pedido.descricao;
      }
      return this;
    }

    comprador(comprador) {
      this.comprador = {};
      if (comprador.nome != null) {
        this.comprador.nome = comprador.nome;
      }
      if (comprador.documento != null) {
        this.comprador.documento = comprador.documento;
      }
      if (comprador.ip != null) {
        this.comprador.ip = comprador.ip;
      }
      if (comprador.userAgent != null) {
        this.comprador.user_agent = comprador.userAgent;
      }
      if (comprador.endereco) {
        this.comprador.endereco = {};
        if (comprador.endereco.cep != null) {
          this.comprador.endereco.cep = comprador.endereco.cep;
        }
        if (comprador.endereco.logradouro != null) {
          this.comprador.endereco.logradouro = comprador.endereco.logradouro;
        }
        if (comprador.endereco.numero != null) {
          this.comprador.endereco.numero = comprador.endereco.numero;
        }
        if (comprador.endereco.complemento != null) {
          this.comprador.endereco.complemento = comprador.endereco.complemento;
        }
        if (comprador.endereco.bairro != null) {
          this.comprador.endereco.bairro = comprador.endereco.bairro;
        }
        if (comprador.endereco.cidade != null) {
          this.comprador.endereco.cidade = comprador.endereco.cidade;
        }
        if (comprador.endereco.uf != null) {
          this.comprador.endereco.uf = comprador.endereco.uf;
        }
      }
      return this;
    }

    boleto(boleto) {
      this.boleto = {};
      if (boleto.beneficiario != null) {
        this.boleto.beneficiario = boleto.beneficiario;
      }
      if (boleto.carteira != null) {
        this.boleto.carteira = boleto.carteira;
      }
      if (boleto.nossoNumero != null) {
        this.boleto.nosso_numero = boleto.nossoNumero;
      }
      if (boleto.dataEmissao != null) {
        this.boleto.data_emissao = boleto.dataEmissao;
      }
      if (boleto.dataVencimento != null) {
        this.boleto.data_vencimento = boleto.dataVencimento;
      }
      if (boleto.valorTitulo != null) {
        this.boleto.valor_titulo = boleto.valorTitulo;
      }
      if (boleto.urlLogotipo != null) {
        this.boleto.url_logotipo = boleto.urlLogotipo;
      }
      if (boleto.mensagemCabecalho != null) {
        this.boleto.mensagem_cabecalho = boleto.mensagemCabecalho;
      }
      if (boleto.tipoRenderizacao != null) {
        this.boleto.tipo_renderizacao = boleto.tipoRenderizacao;
      }
      if (boleto.instrucoes) {
        this.boleto.instrucoes = {};
        if (boleto.instrucoes.linha1 != null) {
          this.boleto.instrucoes.instrucao_linha_1 = boleto.instrucoes.linha1;
        }
        if (boleto.instrucoes.linha2 != null) {
          this.boleto.instrucoes.instrucao_linha_2 = boleto.instrucoes.linha2;
        }
        if (boleto.instrucoes.linha3 != null) {
          this.boleto.instrucoes.instrucao_linha_3 = boleto.instrucoes.linha3;
        }
        if (boleto.instrucoes.linha4 != null) {
          this.boleto.instrucoes.instrucao_linha_4 = boleto.instrucoes.linha4;
        }
        if (boleto.instrucoes.linha5 != null) {
          this.boleto.instrucoes.instrucao_linha_5 = boleto.instrucoes.linha5;
        }
        if (boleto.instrucoes.linha6 != null) {
          this.boleto.instrucoes.instrucao_linha_6 = boleto.instrucoes.linha6;
        }
        if (boleto.instrucoes.linha7 != null) {
          this.boleto.instrucoes.instrucao_linha_7 = boleto.instrucoes.linha7;
        }
        if (boleto.instrucoes.linha8 != null) {
          this.boleto.instrucoes.instrucao_linha_8 = boleto.instrucoes.linha8;
        }
        if (boleto.instrucoes.linha9 != null) {
          this.boleto.instrucoes.instrucao_linha_9 = boleto.instrucoes.linha9;
        }
        if (boleto.instrucoes.linha10 != null) {
          this.boleto.instrucoes.instrucao_linha_10 = boleto.instrucoes.linha10;
        }
        if (boleto.instrucoes.linha11 != null) {
          this.boleto.instrucoes.instrucao_linha_11 = boleto.instrucoes.linha11;
        }
        if (boleto.instrucoes.linha11 != null) {
          this.boleto.instrucoes.instrucao_linha_12 = boleto.instrucoes.linha11;
        }
      }
      if (boleto.registro) {
        this.boleto.registro = {};
        if (boleto.registro.agenciaPagador != null) {
          this.boleto.registro.agencia_pagador = boleto.registro.agenciaPagador;
        }
        if (boleto.registro.razaoContaPagador != null) {
          this.boleto.registro.razao_conta_pagador = boleto.registro.razaoContaPagador;
        }
        if (boleto.registro.contaPagador != null) {
          this.boleto.registro.conta_pagador = boleto.registro.contaPagador;
        }
        if (boleto.registro.controleParticipante != null) {
          this.boleto.registro.controle_participante = boleto.registro.controleParticipante;
        }
        if (boleto.registro.qtdeDiasMulta != null) {
          this.boleto.registro.qtde_dias_multa = boleto.registro.qtdeDiasMulta;
        }
        if (boleto.registro.aplicarMulta != null) {
          this.boleto.registro.aplicar_multa = boleto.registro.aplicarMulta;
        }
        if (boleto.registro.valorPercentualMulta != null) {
          this.boleto.registro.valor_percentual_multa = boleto.registro.valorPercentualMulta;
        }
        if (boleto.registro.valorMulta != null) {
          this.boleto.registro.valor_multa = boleto.registro.valorMulta;
        }
        if (boleto.registro.valorDescontoBonificacao != null) {
          this.boleto.registro.valor_desconto_bonificacao = boleto.registro.valorDescontoBonificacao;
        }
        if (boleto.registro.debitoAutomatico != null) {
          this.boleto.registro.debito_automatico = boleto.registro.debitoAutomatico;
        }
        if (boleto.registro.rateioCredito != null) {
          this.boleto.registro.rateio_credito = boleto.registro.rateioCredito;
        }
        if (boleto.registro.enderecoDebitoAutomatico != null) {
          this.boleto.registro.endereco_debito_automatico = boleto.registro.enderecoDebitoAutomatico;
        }
        if (boleto.registro.tipoOcorrencia != null) {
          this.boleto.registro.tipo_ocorrencia = boleto.registro.tipoOcorrencia;
        }
        if (boleto.registro.especieTitulo != null) {
          this.boleto.registro.especie_titulo = boleto.registro.especieTitulo;
        }
        if (boleto.registro.primeiraInstrucao != null) {
          this.boleto.registro.primeira_instrucao = boleto.registro.primeiraInstrucao;
        }
        if (boleto.registro.segundaInstrucao != null) {
          this.boleto.registro.segunda_instrucao = boleto.registro.segundaInstrucao;
        }
        if (boleto.registro.qtdeDiasJuros != null) {
          this.boleto.registro.qtde_dias_juros = boleto.registro.qtdeDiasJuros;
        }
        if (boleto.registro.valorJurosMora != null) {
          this.boleto.registro.valor_juros_mora = boleto.registro.valorJurosMora;
        }
        if (boleto.registro.dataLimiteDesconto != null) {
          this.boleto.registro.data_limite_desconto = boleto.registro.dataLimiteDesconto;
        }
        if (boleto.registro.valorDesconto != null) {
          this.boleto.registro.valor_desconto = boleto.registro.valorDesconto;
        }
        if (boleto.registro.valorIof != null) {
          this.boleto.registro.valor_iof = boleto.registro.valorIof;
        }
        if (boleto.registro.valorAbatimento != null) {
          this.boleto.registro.valor_abatimento = boleto.registro.valorAbatimento;
        }
        if (boleto.registro.tipoInscricaoPagador != null) {
          this.boleto.registro.tipo_inscricao_pagador = boleto.registro.tipoInscricaoPagador;
        }
        if (boleto.registro.sequenciaRegistro != null) {
          this.boleto.registro.sequencia_registro = boleto.registro.sequenciaRegistro;
        }
      }
      return this;
    }

    enviar(token, callback) {
      var charSet, header, headerBase64, mediaType, options, transacao;
      transacao = {
        merchant_id: this.merchantId,
        meio_pagamento: "300",
        pedido: this.pedido,
        comprador: this.comprador,
        boleto: this.boleto,
        token_request_confirmacao_pagamento: token
      };
      mediaType = "application/json";
      charSet = "UTF-8";
      header = `${this.merchantId}:${this.chaveDeSeguranca}`;
      headerBase64 = Buffer.from(header).toString("base64");
      options = {
        method: "POST",
        body: JSON.stringify(transacao),
        headers: {
          "Authorization": `Basic ${headerBase64}`,
          "Accept": mediaType,
          "Accept-Charset": charSet,
          "Content-Type": `${mediaType};charset=${charSet}`
        }
      };
      if (this.sandbox) {
        options.uri = "https://homolog.meiosdepagamentobradesco.com.br/apiboleto/transacao";
      } else {
        options.uri = "https://meiosdepagamentobradesco.com.br/apiboleto/transacao";
      }
      return request(options, function(err, res, body) {
        var json, resultado;
        if (err) {
          return callback(err);
        } else {
          json = JSON.parse(body);
          resultado = {};
          if (json.merchant_id != null) {
            resultado.merchantId = json.merchant_id;
          }
          if (json.meio_pagamento != null) {
            resultado.meioPagamento = json.meio_pagamento;
          }
          if (json.pedido) {
            resultado.pedido = {};
            if (json.pedido.numero != null) {
              resultado.pedido.numero = json.pedido.numero;
            }
            if (json.pedido.valor != null) {
              resultado.pedido.valor = json.pedido.valor;
            }
            if (json.pedido.descricao != null) {
              resultado.pedido.descricao = json.pedido.descricao;
            }
          }
          if (json.boleto) {
            resultado.boleto = {};
            if (json.boleto.valor_titulo != null) {
              resultado.boleto.valorTitulo = json.boleto.valor_titulo;
            }
            if (json.boleto.data_geracao != null) {
              resultado.boleto.dataGeracao = json.boleto.data_geracao;
            }
            if (json.boleto.data_atualizacao != null) {
              resultado.boleto.dataAtualizacao = json.boleto.data_atualizacao;
            }
            if (json.boleto.linha_digitavel != null) {
              resultado.boleto.linhaDigitavel = json.boleto.linha_digitavel;
            }
            if (json.boleto.linha_digitavel_formatada != null) {
              resultado.boleto.linhaDigitavelFormatada = json.boleto.linha_digitavel_formatada;
            }
            if (json.boleto.token != null) {
              resultado.boleto.token = json.boleto.token;
            }
            if (json.boleto.url_acesso != null) {
              resultado.boleto.urlAcesso = json.boleto.url_acesso;
            }
          }
          if (json.status) {
            resultado.status = {};
            if (json.status.codigo != null) {
              resultado.status.codigo = json.status.codigo;
            }
            if (json.status.mensagem != null) {
              resultado.status.mensagem = json.status.mensagem;
            }
            if (json.status.detalhes != null) {
              resultado.status.detalhes = json.status.detalhes;
            }
          }
          return callback(null, resultado);
        }
      });
    }

  };

  module.exports = shopfacil;

}).call(this);
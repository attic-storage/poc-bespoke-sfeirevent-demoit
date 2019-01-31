require 'asciidoctor'
require 'asciidoctor/extensions'

class DemoitBlockMacro < Asciidoctor::Extensions::BlockMacroProcessor
  use_dsl

  named :demoit

  def process parent, target, attrs
    html = %(<#{target} #{attrs.map{|k,v| "#{k}=\"#{v}\""}.join(' ')}></#{target}>)

    create_pass_block parent, html, attrs, subs: nil
  end
end

Asciidoctor::Extensions.register do
  block_macro DemoitBlockMacro
end

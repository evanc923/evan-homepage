import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem, ProductGridItem } from "../components/grid-item";
import thumbpup from "../public/images/works/pup_eyecatch.png"
import thumbD5000 from "../public/images/works/d5000_eyecatch.jpg"
import thumbPegasusPro from "../public/images/works/pegasus_pro_eyecatch.png"
import thumbPegasus32 from "../public/images/works/pegasus32_eyecatch.png"
import thumbN1616 from "../public/images/works/vtrakn_eyecatch.jpg"
import thumbHybridBoost from "../public/images/works/hybridboost_eyecatch.png"

const Works = () => {
    return (
      <Layout title="Works">
        <Container>
          <Heading as="h3" fontSize={20} mt={6} mb={4}>
            Software
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProductGridItem id="pup" title="Promise Utility Pro" thumbnail={thumbpup} link={'https://www.youtube.com/watch?v=G5auKZBCAwI'}>
                Utility application for storage product.
              </ProductGridItem>
            </Section>
            <Section>
              <ProductGridItem id="hb" title="HybridBoost" thumbnail={thumbHybridBoost} link={'https://www.promise.com/tw/Promotion/the-boost-technologies'}>
                HybridBoost combines the benefits of both on-premises and cloud storage solutions.
              </ProductGridItem>
            </Section>
          </SimpleGrid>

          <Section delay={0.1}>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={4}>
              Products
            </Heading>
          </Section>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section delay={0.2}>
              <ProductGridItem id="d5000" title="Vtrak D Series" thumbnail={thumbD5000} link={'https://www.promise.com/Products/VTrak/D5000'}>
                High availability and performance enterprise RAID storage product.
              </ProductGridItem>
            </Section>
            <Section delay={0.2}>
              <ProductGridItem id="n1616" title="Vtrak N Series" thumbnail={thumbN1616} link={'https://www.promise.com/Products/VTrak/N-Series'}>
                High performance RAID storage with TierBoost (U.2 NVMe/SSD/HDD Tiering)
              </ProductGridItem>
            </Section>
            <Section delay={0.3}>
              <ProductGridItem id="pegasuspro" title="Pegasus Pro" thumbnail={thumbPegasusPro} link={'https://www.promise.com/Products/Pegasus/PegasusPro/'}>
                NAS and DAS two in one storage solution for media professionals, offering high-performance file sharing and collaboration.
              </ProductGridItem>
            </Section>
            <Section delay={0.3}>
              <ProductGridItem id="pegasus32" title="Pegasus 32" thumbnail={thumbPegasus32} link={'https://www.promise.com/Products/Pegasus/Pegasus32'}>
                Thunderbolt 3 and USB 3.2 Gen 2 hardware RAID storage for creative professional.
              </ProductGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Layout>
    )
}

export default Works;
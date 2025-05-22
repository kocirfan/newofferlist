import { useEffect, useState } from 'react';
import {
  Page,
  Card,
  Spinner,
  Text,
  DataTable,
  TextContainer,
  Divider,
} from '@shopify/polaris';

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://cehaeu.mailsender.mazakayazilim.com/api/data')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API error', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Page title="Teklif Listesi">
        <Card sectioned>
          <Spinner accessibilityLabel="Yükleniyor" size="large" />
        </Card>
      </Page>
    );
  }

  return (
    <Page title="Teklif Listesi">
      {data.map((quotation) => (
        <Card key={quotation.quotationNo} title={`Teklif No: ${quotation.quotationNo}`} sectioned>
          <TextContainer spacing="loose">
            <Text variant="bodyMd" as="p">
              <strong>Tarih:</strong> {quotation.dateStr}
            </Text>
            <Text variant="bodyMd" as="p">
              <strong>Müşteri:</strong> {quotation.deliveryInfo.firstName} {quotation.deliveryInfo.lastName} - {quotation.deliveryInfo.email}
            </Text>
            <Text variant="bodyMd" as="p">
              <strong>Adres:</strong> {quotation.deliveryInfo.address}, {quotation.deliveryInfo.city}, {quotation.deliveryInfo.country}
            </Text>
            <Divider />
            <DataTable
              columnContentTypes={['text', 'text', 'numeric', 'numeric', 'text', 'text']}
              headings={['Görsel', 'Ürün', 'Fiyat', 'Birim Fiyat', 'Adet', 'Seçenekler']}
              rows={quotation.offers.map((offer) => [
                <img src={offer.image} alt={offer.title} width={50} />,
                offer.title,
                `${offer.price} ₺`,
                `${offer.unitPrice} ₺`,
                offer.quantity,
                offer.options,
              ])}
            />
          </TextContainer>
        </Card>
      ))}
    </Page>
  );
}

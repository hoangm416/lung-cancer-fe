import React from 'react';
import research1 from "../assets/research1.png";
import research2 from "../assets/research2.png";
import research3 from "../assets/research3.png";

const articles = [
  {
    id: 1,
    title: "Ứng dụng Machine Learning trong Y học",
    description: "Nghiên cứu về cách áp dụng học máy để chẩn đoán bệnh chính xác hơn.",
    image: research1,
    link: "#"
  },
  {
    id: 2,
    title: "Công nghệ Blockchain và Bảo mật Dữ liệu",
    description: "Khám phá cách blockchain có thể cải thiện tính minh bạch và bảo mật trong các hệ thống dữ liệu.",
    image: research2,
    link: "#"
  },
  {
    id: 3,
    title: "Tác động của AI đối với Giáo dục",
    description: "Phân tích sự thay đổi của giáo dục dưới tác động của trí tuệ nhân tạo.",
    image: research3,
    link: "#"
  }
];

const Research = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài báo nghiên cứu khoa học</h1>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="flex border rounded-lg shadow-md overflow-hidden">
            <img src={article.image} alt={article.title} className="w-1/3 h-48 object-cover" />
            <div className="p-4 w-2/3">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
              <a href={article.link} className="text-blue-500 hover:underline">Xem chi tiết</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;

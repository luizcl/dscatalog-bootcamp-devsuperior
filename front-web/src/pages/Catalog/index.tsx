import React from 'react';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { Link } from 'react-router-dom';

const Catalog = () => (
    <div className="catalog-container">
        <h1 className="catalog-title">
            Catálogo de produtos
        </h1>
        <div className="catalog-products">
            <Link to="1"><ProductCard /></Link>
            <Link to="2"><ProductCard /></Link>
            <Link to="3"><ProductCard /></Link>
            <Link to="4"><ProductCard /></Link>
            <Link to="5"><ProductCard /></Link>
            <Link to="6"><ProductCard /></Link>
            <Link to="7"><ProductCard /></Link>
            <Link to="8"><ProductCard /></Link>
            <Link to="9"><ProductCard /></Link>
        </div>
    </div>
);

export default Catalog;